module pg3d.Tests.Testing

open System

let assertNearly expected actual message =
    let expectedMin = expected * 0.999999
    let expectedMax = expected * 1.000001
    let ok = expected >= expectedMin && expected <= expectedMax
    if ok
    then
        ()
    else
        let output = System.String.Format("{0} was not between {1} and {2} - {3}", expected, expectedMin, expectedMax, message)
        FsUnit.Assert.AreEqual(true, false, output)

