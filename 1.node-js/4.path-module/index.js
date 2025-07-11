const path = require('path')

console.log("Directory name", path.dirname(__filename))
console.log("Filename", path.basename(__filename))
console.log("Extension name",path.extname(__filename))
