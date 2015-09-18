[<ReflectedDefinition>]
module pg3d.Eggs

type EggParameters = { a:float; b:float; c:float; d:float; e:float }

/// Eggquation-1, Oval - 1 parameter mod
///
/// b^2 * y^2  +  a^2 * x^2  +  2 * d * y * x^2  + d^2 * x^2 -  a^2 * b^2  =  0
/// x = ((b * b * (a * a - y * y) / (a * a + 2.0 * d * y + d * d)))^0.5

let eggquation1 a b d y =
    Maths.sqrt((b * b * (a * a - y * y) / (a * a + 2.0 * d * y + d * d)))

/// Tame equation 1, for y in range -1 to 1. Output always <= 1

let tameEggquation1 width shape y =
    let b = Maths.clampZeroOne width
    let d = Maths.clampInsideMinusOneOne shape
    eggquation1 1.0 b d y

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
    //if y > 2.0 || y < 1.0 then
    //    System.Console.WriteLine("eggquation2ActualYInput out of range: {0} (from {1})", y, y')
    let value = Maths.sqrt ((y - a) * (y - b) * (y - c) * 0.5)
    value

/// Rethink parameters -
///    fatness, shape, bulge - try to map to same
///    max absolute range for parameters, mapped for each (by scaling) from 0 to 1

/// Eggquation-3, for y in range -1 to 1.
///
/// Oval - two parameter mod
///
/// x = b * ((1 - y^2) * (1 + cy) / (1 + dy)) ^ 0.5
///
/// fix a to 1.
/// b = fatness - linear scale
/// c...
/// d...

let eggquation3MaxInput (a:float) (b:float) (c:float) (d:float) = a
let eggquation3MaxOutput (a:float) b d = Maths.sqrt (a * a * b * b / (a * a + d * d))

let eggquation3 a b c d y' =
    let yInputScale = eggquation3MaxInput a b c d
    let y = y' * yInputScale
    b * Maths.sqrt((1.0 - y * y) * (1.0 + c * y) / (1.0 + d * y))

/// Eggquation-4, for y in range -1 to 1.
///
/// Modigied egg of Columbus: y^4  +  10 * x^2 * y^2  +  5 * x^2  =  y
/// Already 'upright', just need to find x for a given y      ^should be ^4 really
///
/// x = ((y - a*y^4) / (by^2 + c))^0.5

/// Eggquation-5, for y in range -1 to 1.
///
/// Super-ellipsoid


