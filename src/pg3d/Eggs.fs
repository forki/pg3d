[<ReflectedDefinition>]
module pg3d.Eggs

open System.IO
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.THREE

let PI = 3.14159265359

[<JSEmitInline("(Math.sqrt({0}))")>]
let mySqrt (n : float) : float = sqrt(n)

[<JSEmitInline("(Math.cos({0}))")>]
let myCos (n : float) : float = cos(n)

[<JSEmitInline("(Math.sin({0}))")>]
let mySin (n : float) : float = sin(n)

/// Eggquation-1, for y in range -1 to 1. Parameters a b d (>= 0)
///
/// Oval - 1 parameter mod
///
/// b^2 * y^2  +  a^2 * x^2  +  2 * d * y * x^2  + d^2 * x^2 -  a^2 * b^2  =  0
/// x = ((b * b * (a * a - y * y) / (a * a + 2.0 * d * y + d * d)))^0.5

let eggquation1MaxInput (a:float) (b:float) (d:float) = a
let eggquation1MaxOutput a b d = mySqrt (a * a * b * b / (a * a + d * d))

let eggquation1 a b d y' =
    let yInputScale = eggquation1MaxInput a b d
    let y = y' * yInputScale
    mySqrt((b * b * (a * a - y * y) / (a * a + 2.0 * d * y + d * d)))

/// Eggquation-2, for y in range -1 to 1. Parameters a b c (>= 0) (a < b < c)
///
/// Cubic
///
/// x = ((y-a)(y-b)(y-c))^0.5
/// -1.5 then * 2
///
/// TBD QUARTIC ????? x = ((y-a)(y-b)(y-c)(y-d))^0.5 ?????

let eggquation2MinInput (a:float) (b:float) (c:float) = List.min [a; b; c]
let eggquation2MaxInput (a:float) (b:float) (c:float) = List.nth (List.sort [a; b; c]) 1

System.Console.WriteLine("eggquation2MinInput {0}", eggquation2MinInput 1. 2. 3.)
System.Console.WriteLine("eggquation2MaxInput {0}", eggquation2MaxInput 1. 2. 3.)

let eggquation2 a b c y' =
    let yInputMin = eggquation2MinInput a b c
    let yInputMax = eggquation2MaxInput a b c
    let yInputRange = yInputMax - yInputMin
    let y = yInputMin + ((y' + 1.0) / 2.0 * yInputRange)
    if y > 2.0 || y < 1.0 then
        System.Console.WriteLine("eggquation2ActualYInput out of range: {0} (from {1})", y, y')
    let value = mySqrt ((y - a) * (y - b) * (y - c) * 0.5)
    value

/// Rethink parameters -
///    fatness, shape, bulge - try to map to same
///    max absolute range for parameters, mapped for each (by scaling) from 0 to 1

/// Eggquation-3, for y in range -1 to 1.
///
/// Oval - 2 parameter mod
///
/// x = a * (1 - y^2/b * (1 + cx) / (1 - dx))^0.5

/// Eggquation-4, for y in range -1 to 1.
///
/// Modigied egg of Columbus: y^4  +  10 * x^2 * y^2  +  5 * x^2  =  y
/// Already 'upright', just need to find x for a given y      ^should be ^4 really
///
/// x = ((y - a*y^4) / (by^2 + c))^0.5

/// Eggquation-5, for y in range -1 to 1.
///
/// Super-ellipsoid

let doIt () =

    Globals.console.log("starting")
    System.Console.WriteLine("starting at {0:d} {0:t}!", System.DateTime.Now)

    let wnd = Globals.window

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

    let computeEggGeometry fy scaleFactor =

        let sphereGeom = THREE.SphereGeometry.Create(radius, float segments, float rings)

        let mutable maxX = 0.0
        let mutable yAtMaxX = 0.0
        let mutable maxY = -999999999.
        let mutable minY =  999999999.

        for r in [0 .. rings] do

            for s in [0 .. segments] do

                let vertexIndex = r * (segments + 1) + s

                let u = (float s) / (float segments)
                let v = (float r) / (float rings)

                let phi = u * 2.0 * PI
                let theta = v * PI

                let y = sphereGeom.vertices.[vertexIndex].y
                let fy' = fy y
                let x = -fy' * myCos(phi) (* * mySin(theta) *) * scaleFactor
                let z = fy' * mySin(phi) (* * mySin(theta) *) * scaleFactor

                sphereGeom.vertices.[vertexIndex].x <- x
                sphereGeom.vertices.[vertexIndex].z <- z

                if s = 0 then
                    System.Console.WriteLine("Point, r, {0}, s, {1}, u, {2}, v, {3}, y, {4}, fy, {5}, x, {6}, z, {7}, phi, {8}, theta, {9}, myCos(phi), {10}, mySin(phi), {11}, mySin(theta)",
                                                     r,      s,      u,      v,      y,      fy',     x,      z, phi / PI * 180.0, theta / PI * 180.0, myCos(phi), mySin(phi), mySin(theta))

                if x > maxX then
                    maxX <- x
                    yAtMaxX <- y

                if y > maxY then
                    maxY <- y

                if y < minY then
                    minY <- y

        System.Console.WriteLine("MaxX was {0} at {1}. MaxY was {2}. MinY was {3}", maxX, yAtMaxX, maxY, minY)

        sphereGeom.computeFaceNormals()

        sphereGeom.computeBoundingBox()
        sphereGeom.computeBoundingSphere()

        sphereGeom.vertices
        |>
        Array.iter (fun c ->
            if c.z = 0. && c.x >= 0. then
                let error = c.x * c.x - (c.y - 1.0) * (c.y - 2.0) * (c.y - 3.0)
                if error <> 0.0 then
                    System.Console.WriteLine("Bad coord at x {0} y {1} z {2} (error {3})", c.x, c.y, c.z, error)
        )

        sphereGeom

    let addEgg fy scale material px py pz=

        let egg = THREE.Mesh.Create(computeEggGeometry fy scale, material)
        egg.matrixAutoUpdate <- true
        egg.rotationAutoUpdate <- true
        egg.position.x <- px
        egg.position.y <- py
        egg.position.z <- pz
        scene.add(egg)
        egg

    let addUsingEggquation1 a b d m ox oy oz =
        addEgg (eggquation1 a b d) (1. / eggquation1MaxOutput a b d) m ox oy oz

    let addUsingEggquation2 a b c m ox oy oz =
        addEgg (eggquation2 a b c) 2. m ox oy oz

    let material = materialL

    let e1 = addUsingEggquation1 4. 3. 1. material -1.2   1.2 -3.0
    let e2 = addUsingEggquation2 1. 2. 3. material  1.2  -1.2 -3.0
    //let e3 = addUsingEggquation1 4. 2. 1. material -1.2  -1.2 -3.0

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
        //rotate e3 0.00123241 0.0243321 0.00312435

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

    let testEq2 y =
        System.Console.WriteLine("eggquationActual2 {0} {1}", y, eggquation2 1. 2. 3. y)

    for y in [1.0..(-0.02)..(-1.0)] do
        testEq2 y

    printfn "Done, enter to continue"
    System.Console.ReadLine() |> ignore

    0
