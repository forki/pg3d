[<ReflectedDefinition>]
module pg3d.Eggs

/// (To understand these equations, desmos.com/calculator is useful)

type EggParameters = { a:float; b:float; c:float; d:float; e:float }

/// Eggquation-1, Oval - 1 parameter mod
///
/// x = ((b * b * (a * a - y * y) / (a * a + 2.0 * c * y + c * c)))^0.5

let eggquation1 a b c y =
    Maths.sqrt((b * b * (a * a - y * y) / (a * a + 2.0 * c * y + c * c)))

/// Tame equation 1, for y in range -1 to 1. Output always <= 1

let tameEggquation1 width shape y =
    let b = Maths.clampZeroOne width
    let c = Maths.clampInsideMinusOneOne shape
    eggquation1 1.0 b c y

/// Eggquation-2, Cubic
///
/// x = ((y-a)(y-b)(y-c))^0.5

let eggquation2 a b c y =
    Maths.sqrt ((y - a) * (y - b) * (y - c))

let tameEquation2 width shape reshape =
    let b = Maths.clamp Maths.justBelowMinusOne -20.0 shape
    let c = Maths.clamp Maths.justAboveOne 20.0 reshape
    let rawNeedsScaling = eggquation2 -1.0 b c
    rawNeedsScaling

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


