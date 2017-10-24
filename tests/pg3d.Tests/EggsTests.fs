module pg3d.Tests.Eggs

open pg3d

open System

open NUnit.Framework
open FsUnit

[<Test>]
let ``Eggquation 1 - For y from 1 to -1, on the x axis, the gradient should decrease`` () =
    let dy = 0.001
    let yRange = [1.0..(-dy)..(-1.0 + dy) ]
    yRange |> Seq.fold (fun prevDx y0 ->
        let x0 = Eggs.eggquation1 4. 3. 1. y0
        let y1 = y0 - dy
        let x1 = Eggs.eggquation1 4. 3. 1. y1
        let dx = x1 - x0
        FsUnit.Assert.Less(dx, prevDx, sprintf "failure at y0 %f x0 %f y1 %f x1 %f dx %f prevDx %f" y0 x0 y1 x1 dx prevDx)
        dx
    ) System.Double.MaxValue
    |> ignore

[<Test>]
let ``Eggquation 2 - For y from 1 to -1, on the x axis, the gradient should decrease`` () =
    let dy = 0.01
    let yRange = [1.0..(-dy)..(-1.0 + dy) ]
    yRange |> Seq.fold (fun (prevDx:float) y0 ->
        let x0 = Eggs.eggquation2 1. 2. 3. y0
        let y1 = y0 - dy
        let x1 = Eggs.eggquation2 1. 2. 3. y1
        let dx = x1 - x0
        FsUnit.Assert.Less(dx, prevDx, sprintf "failure at y0 %f x0 %f y1 %f x1 %f dx %f prevDx %f" y0 x0 y1 x1 dx prevDx)
        dx
    ) System.Double.MaxValue
    |> ignore

[<Test>]
let public ``Tame Eggquation 1 - For y from 1 to -1, on the x axis, the output should be proportional to width`` () =
    let dy = 0.01
    let yRange = [1.0..(-dy)..(-1.0) ]
    let ds = 0.01
    let shapeRange = [Maths.justAboveMinusOne..ds..Maths.justBelowOne ]
    yRange |> Seq.iter (fun y ->
        shapeRange |> Seq.iter (fun s ->

            let xAtWidth1 = Eggs.tameEggquation1 1.00 s y

            Testing.assertNearly 1.0 xAtWidth1 (String.Format("at width 1, output should always be <= 1 (y {0}) (shape {1})", y, s))

            let testAtOtherWidth otherWidth =
                let otherOutput = Eggs.tameEggquation1 otherWidth s y
                Testing.assertNearly (xAtWidth1 * otherWidth) otherOutput (String.Format("at width {0}, output {1} should be proportional width 1 output {2} (y {3}) (shape {4})", otherWidth, otherOutput, xAtWidth1, y, s))

            [0.01; 0.05; 0.25; 0.33; 0.50; 0.66; 0.75; 0.95; 0.99; 1.0;] |> Seq.iter (fun bw ->
                [0.0; 1.0; 2.0; 3.0; 6.0; 9.0; 10.0] |> Seq.iter (fun dw ->
                    testAtOtherWidth (bw + dw)
                )
            )
        )
    )
    |> ignore
