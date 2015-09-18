[<ReflectedDefinition>]
module pg3d.EggDemo

open System.IO

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.THREE

let createSlider id label setterFunc =

    let container = Globals.document.createElement("span")

    let span = Globals.document.createElement("span")
    span.innerText <- label

    let input = Globals.document.createElement("input")

    input.setAttribute("type", "range")
    input.setAttribute("min", "0")
    input.setAttribute("max", "100")
    input.setAttribute("step", "1")
    input.setAttribute("value", "50")
    input.setAttribute("prevValue", "50")
    input.setAttribute("id", id)

    input.onmousemove <- (fun e ->

        let currentValue = (e.srcElement :?> HTMLInputElement).value
        let previousValue = (e.srcElement :?> HTMLInputElement).attributes.getNamedItem("prevValue").value
        (e.srcElement :?> HTMLInputElement).setAttribute("prevValue", currentValue)

        if (currentValue <> previousValue) then
            ((e.srcElement :?> HTMLInputElement).nextElementSibling :?> HTMLInputElement).value <- (e.srcElement :?> HTMLInputElement).value + "%"
            setterFunc (Maths.parseFloat(currentValue))

        null
    )

    let output = Globals.document.createElement("output")
    output.innerText <- "50%"

    container.appendChild(span) |> ignore
    container.appendChild(input) |> ignore
    container.appendChild(output) |> ignore
    container

let mutable ep1 = { a=1.0; b=1.0; c=1.0; d=1.0; e=1.0; }:Eggs.EggParameters

let updateEggParameterA eggParameters a = ep1 <- { eggParameters with Eggs.EggParameters.a = a }
let updateEggParameterB eggParameters b = ep1 <- { eggParameters with Eggs.EggParameters.b = b }
let updateEggParameterC eggParameters c = ep1 <- { eggParameters with Eggs.EggParameters.c = c }
let updateEggParameterD eggParameters d = ep1 <- { eggParameters with Eggs.EggParameters.d = d }
let updateEggParameterE eggParameters e = ep1 <- { eggParameters with Eggs.EggParameters.e = e }

let createEggControls controlIdPrefix label eggParameters =

    let container = Globals.document.createElement("fieldset")

    let legend = Globals.document.createElement("legend");
    legend.innerText <- label

    let sliderA = createSlider (controlIdPrefix + "a") "a:" (updateEggParameterA eggParameters)
    let sliderB = createSlider (controlIdPrefix + "b") "b:" (updateEggParameterB eggParameters)
    let sliderC = createSlider (controlIdPrefix + "c") "c:" (updateEggParameterC eggParameters)
    let sliderD = createSlider (controlIdPrefix + "d") "d:" (updateEggParameterD eggParameters)
    let sliderE = createSlider (controlIdPrefix + "e") "e:" (updateEggParameterE eggParameters)

    container.appendChild legend  |> ignore
    container.appendChild sliderA |> ignore
    container.appendChild sliderB |> ignore
    container.appendChild sliderC |> ignore
    container.appendChild sliderD |> ignore
    container.appendChild sliderE |> ignore
    container

let createControls id =

    let container = Globals.document.createElement("div")

    let eggControls = createEggControls "eggControls" "Egg Controls" ep1

    container.appendChild eggControls |> ignore
    Globals.document.getElementById(id).appendChild(container) |> ignore

let doIt () =

    Globals.console.log("starting")
    System.Console.WriteLine("starting at {0:d} {0:t}!", System.DateTime.Now)

    let wnd = Globals.window

    createControls "controls"

    let width() = wnd.innerWidth - 50.0
    let height() = wnd.innerHeight - 50.0

    let depth = 100.0
    let minDepth = 0.01

    let scene = THREE.Scene.Create() :?> THREE.Scene
    scene.autoUpdate <- true

    let camera = THREE.PerspectiveCamera.Create( 75., width() / height(), minDepth, depth )
    camera.matrixAutoUpdate <- true
    camera.rotationAutoUpdate <- true
    camera.position.z <- 2.0

    let rendererProps = createEmpty<THREE.WebGLRendererParameters>()
    rendererProps.antialias <- true

    let renderer = THREE.WebGLRenderer.Create rendererProps
    renderer.setClearColor("#ffffff")
    renderer.setSize(width(), height())
    //renderer.setFaceCulling(THREE.CullFac, THREE.FrontFaceDirection.FrontFaceDirectionCCW)
    renderer.autoUpdateObjects <- true
    Globals.document.getElementsByTagName_body().[0].appendChild( renderer.domElement ) |> ignore

    let onWindowResize(e:UIEvent):obj =
        camera.aspect <- width() / height()
        camera.updateProjectionMatrix()
        renderer.setSize(width(), height())
        null

    Globals.addEventListener_resize(new System.Func<UIEvent,obj>(onWindowResize), false)

    let geometry = THREE.BoxGeometry.Create( 1., 1., 1. )

    let matProps = createEmpty<THREE.MeshPhongMaterialParameters>()
    matProps.color <- float 0x669977
    matProps.shininess <- 50.0
    let materialP = THREE.MeshPhongMaterial.Create(matProps)

    let matPropsL = createEmpty<THREE.MeshLambertMaterialParameters>()
    matPropsL.color <- float 0x66ff77
    matPropsL.wireframe <- true
    let materialL = THREE.MeshLambertMaterial.Create(matPropsL)

    //let mutable texture = null

    //let loaderManager = THREE.LoadingManager.Create(fun image ->
    //    texture <- image
    //    ()
    //)

    let loader = THREE.TextureLoader.Create()

    //loader. ("threeJsTestTexture.jpg",
    //)

    //map.wrapS <- THREE.RepeatWrapping
    //map.wrapT <- THREE.RepeatWrapping
    //map.anisotropy = 16.

    //let matPropsT = createEmpty<THREE.MeshLambertMaterialParameters>()
    //let materialT = THREE.MeshLambertMaterial.Create(matPropsT)

    let cube = THREE.Mesh.Create( geometry, materialL );
    //scene.add( cube )

    let directional = THREE.DirectionalLight.Create(float 0xcc0000, 1.0)
    directional.position.set( -100.0, 100.0, 0.0 ) |> ignore
    scene.add(directional)

    let whitePoint = THREE.PointLight.Create(float 0x999999, 1.0, 0.0)
    whitePoint.position.set( 100.0, 100.0, 100.0 ) |> ignore
    scene.add(whitePoint)

    let whiteAmbient = THREE.AmbientLight.Create(float 0x222222)
    scene.add(whiteAmbient)

    let radius = 1.0
    let segments = 100
    let rings = 100

    let computeEggGeometry fy scaleFactor (geom:THREE.SphereGeometry) =

        let mutable maxX = 0.0
        let mutable yAtMaxX = 0.0
        let mutable maxY = -999999999.
        let mutable minY =  999999999.

        for r in [0 .. rings] do

            for s in [0 .. segments] do

                let vertexIndex = r * (segments + 1) + s

                let u = (float s) / (float segments)
                let v = (float r) / (float rings)

                let phi = u * 2.0 * Maths.PI
                let theta = v * Maths.PI

                let y = geom.vertices.[vertexIndex].y
                let fy' = fy y
                let x = -fy' * Maths.cos(phi) (* * mySin(theta) *) * scaleFactor
                let z = fy' * Maths.sin(phi) (* * mySin(theta) *) * scaleFactor

                geom.vertices.[vertexIndex].x <- x
                geom.vertices.[vertexIndex].z <- z

                //if s = 0 then
                //    System.Console.WriteLine("Point, r, {0}, s, {1}, u, {2}, v, {3}, y, {4}, fy, {5}, x, {6}, z, {7}, phi, {8}, theta, {9}, myCos(phi), {10}, mySin(phi), {11}, mySin(theta)",
                //                                     r,      s,      u,      v,      y,      fy',     x,      z, phi / MathUtils.PI * 180.0, theta / MathUtils.PI * 180.0, MathUtils.myCos(phi), MathUtils.mySin(phi), MathUtils.mySin(theta))

                if x > maxX then
                    maxX <- x
                    yAtMaxX <- y

                if y > maxY then
                    maxY <- y

                if y < minY then
                    minY <- y

        System.Console.WriteLine("MaxX was {0} at {1}. MaxY was {2}. MinY was {3}", maxX, yAtMaxX, maxY, minY)

        geom.computeFaceNormals()

        geom.computeBoundingBox()
        geom.computeBoundingSphere()

        geom

    let addEgg fy scale material px py pz=

        let egg = THREE.Mesh.Create(computeEggGeometry fy scale (THREE.SphereGeometry.Create(radius, float segments, float rings)), material)
        egg.matrixAutoUpdate <- true
        egg.rotationAutoUpdate <- true
        egg.position.x <- px
        egg.position.y <- py
        egg.position.z <- pz
        scene.add(egg)
        egg

    let addUsingTameEggquation1 width shape m ox oy oz =
        addEgg (Eggs.tameEggquation1 width shape) 1.0 m ox oy oz

    let updateUsingTameEggquation1 width shape (egg:THREE.Mesh) =
        System.Console.WriteLine("updating eqn 1 geom using width {0} shape {1}", width, shape)
        egg.geometry.dynamic <- true
        computeEggGeometry (Eggs.tameEggquation1 width shape) 1.0 (egg.geometry :?> THREE.SphereGeometry) |> ignore
        egg.geometry.verticesNeedUpdate <- true

    let addUsingEggquation2 a b c m ox oy oz =
        addEgg (Eggs.eggquation2 a b c) 2. m ox oy oz

    let updateUsingEggquation2 a b c (egg:THREE.Mesh) =
        System.Console.WriteLine("updating eqn 2 geom using a {0} b {1} c {2}", a, b, c)
        egg.geometry.dynamic <- true
        computeEggGeometry (Eggs.eggquation2 a b c) 2. (egg.geometry :?> THREE.SphereGeometry) |> ignore
        egg.geometry.verticesNeedUpdate <- true

    let material = materialL

    let e1 = addUsingTameEggquation1 1. 1. material -1.2   1.2 -3.0
    let e2 = addUsingEggquation2 1. 2. 3. material  1.2  -1.2 -3.0
    let e3 = addUsingTameEggquation1 ep1.b ep1.d material -1.2  -1.2 -3.0
    let e4 = addUsingEggquation2 ep1.a ep1.b ep1.c material  1.2   1.2 -3.0

    let rotate (o : THREE.Object3D) rx ry rz =
        o.rotation.x <- o.rotation.x + rx
        o.rotation.y <- o.rotation.y + ry
        o.rotation.z <- o.rotation.z + rz

    let rec render (dt:float) =

        Globals.requestAnimationFrame(new FrameRequestCallbackDelegate(render)) |> ignore

        scene.autoUpdate <- true

        //rotate cube 0.00123241 0.0243321 0.00312435
        //rotate sp 0.00123241 0.0243321 0.00312435
        rotate e1 0.00123241 0.0243321 0.00312435
        rotate e2 0.00123241 0.0243321 0.00312435
        rotate e3 0.00123241 0.0243321 0.00312435
        rotate e4 0.00123241 0.0243321 0.00312435

        updateUsingTameEggquation1 ep1.b ep1.d e3 |> ignore
        updateUsingEggquation2 ep1.a ep1.b ep1.c e4 |> ignore

        //System.Console.WriteLine("Rendering at rotation x {0} y {1} z {2} dt {3} cz {4}", cube.rotation.x, cube.rotation.y, cube.rotation.z, dt, camera.position.z)

        renderer.render(scene, camera)

    render(0.0)

[<EntryPoint>]
let main args =

    // This will compile the code to JS and copy the html file and the generated script to the parent directory
    let dir = __SOURCE_DIRECTORY__

    // External libraries can provide additional components to FunScript compiler
    // In most of the tutorials we'll be using components from FunScript.HTML extensions
    //let components = FunScript.Components.getHTMLComponents()
    let code = FunScript.Compiler.Compiler.Compile(<@ doIt() @>, noReturn=true(*, components=components*))
    File.WriteAllText(Path.Combine(dir, "../../output/app.js"), code)
    File.Copy(Path.Combine(dir, "index.html"), Path.Combine(dir, "../../output/index.html"), overwrite=true)
    File.Copy(Path.Combine(dir, "three_lambertoon_c.js"), Path.Combine(dir, "../../output/three_lambertoon_c.js"), overwrite=true)
    File.Copy(Path.Combine(dir, "threeJsTestTexture.jpg"), Path.Combine(dir, "../../output/threeJsTestTexture.jpg"), overwrite=true)
    (*
    let testEq2 y =
        System.Console.WriteLine("eggquationActual2 {0} {1}", y, Eggs.eggquation2 1. 2. 3. y)

    for y in [1.0..(-0.02)..(-1.0)] do
        testEq2 y

    printfn "Done, enter to continue"
    System.Console.ReadLine() |> ignore
    *)
    0


