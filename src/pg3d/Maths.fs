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

/// Smallest increment it is sensible to use, around the -1 to +1 range
let public smallest = 0.000001 * 0.001 //(strange but funscsript uses only 6 dp for literals)

let public justAboveOne = 1.0 + smallest
let public justBelowOne = 1.0 - smallest
let public justAboveMinusOne = -1.0 + smallest
let public justBelowMinusOne = -1.0 - smallest

let clamp (min:float) (max:float) (value:float) =
    if value < min then
        min
    elif value > max then
        max
    else value

// FunScript doesn't like it if we miss arguments off declarations.
let clampZeroOne value = clamp 0.0 1.0 value
let clampMinusOneOne value = clamp -1.0 1.0 value
let clampInsideMinusOneOne value = clamp justAboveMinusOne justBelowOne value
