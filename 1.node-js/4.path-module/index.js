const path = require('path')

// dir-path
console.log("Directory name", path.dirname(__filename))
// base name path
console.log("Filename", path.basename(__filename))
// extension name path
console.log("Extension name", path.extname(__filename))
// joining path
const joinpath = path.join("/user", "andu", "pandu");
console.log("joinded path", joinpath)
// normalizing path
const normalisepath = path.normalize("/user/../law")
console.log("normalise path",normalisepath)