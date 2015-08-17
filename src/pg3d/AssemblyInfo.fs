namespace System
open System.Reflection

[<assembly: AssemblyTitleAttribute("pg3d")>]
[<assembly: AssemblyProductAttribute("pg3d")>]
[<assembly: AssemblyDescriptionAttribute("3d graphics for progletariat blog")>]
[<assembly: AssemblyVersionAttribute("1.0")>]
[<assembly: AssemblyFileVersionAttribute("1.0")>]
do ()

module internal AssemblyVersionInformation =
    let [<Literal>] Version = "1.0"
