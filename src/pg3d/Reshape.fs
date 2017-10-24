[<ReflectedDefinition>]
module pg3d.Reshape

//let cubed w = w * w * w

type Operation =
  | Full of Prescale:(float -> float) * Operation:(float -> float)  * Postscale:(float -> float)

// Or

let fullReshape (prescale:float) (selector:float->float) (operation:float->float) (postscale:float) =
  0