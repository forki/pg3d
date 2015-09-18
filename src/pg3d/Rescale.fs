[<ReflectedDefinition>]
module pg3d.Rescale

let ToFrom outputMin outputMax inputMin inputMax (input:float) =
    outputMin + (((input - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin))

let AroundZeroToFrom inputMax outputMax = ToFrom -outputMax outputMax -inputMax inputMax
let AboveZeroToFrom inputMax outputMax = ToFrom 0.0 outputMax 0.0 inputMax

let FromTo inputMin inputMax outputMin outputMax = ToFrom outputMin outputMax inputMin inputMax

let AroundZeroFromTo inputMax outputMax = FromTo -inputMax inputMax -outputMax outputMax
let AboveZeroFromTo inputMax outputMax = FromTo 0.0 inputMax 0.0 outputMax

type Bounds =
    | Bounds of Min:float * Max:float

type Bounded<'a> =
    | Bounded of Bounds: Bounds * Value: 'a


