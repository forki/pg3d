[<ReflectedDefinition>]
module pg3d.Maths

open FunScript

let PI = 3.14159265359

[<JSEmitInline("(Math.sqrt({0}))")>]
let sqrt (n:float) : float = sqrt(n)

[<JSEmitInline("(Math.cos({0}))")>]
let cos (n:float) : float = cos(n)

[<JSEmitInline("(Math.sin({0}))")>]
let sin (n:float) : float = sin(n)

[<JSEmitInline("(parseFloat({0}))")>]
let parseFloat (s:string) : float = float (s)

/// Smallest increment it is sensible to use, around the -1 to +1 range.
let public smallest = 0.000000001

let public justAboveMinusOne = -1.0 + smallest
let public justBelowOne = 1.0 - smallest

let clamp (min:float) (max:float) (value:float) =
    if value < min then
        min
    elif value > max then
        max
    else value

let clampZeroOne = clamp 0.0 1.0
let clampMinusOneOne = clamp -1.0 1.0
let clampInsideMinusOneOne = clamp justAboveMinusOne justBelowOne