module pg3d.Tests

open pg3d

open NUnit
open NUnit.Framework
open FsUnit
open FsCheck
open FsCheck.NUnit

//[<Property(QuietOnSuccess = true, StartSize = -, EndSize = 1.0)>]
//let ``Commutative`` y =
//    let inRange y =
//         let result = eggquation2 1. 2. 3. y

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
