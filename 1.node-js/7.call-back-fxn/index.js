const fs = require("fs")

function person(name, callbackfxn) {
  console.log(`hello ${name}`)
  callbackfxn()
}
function address() {
  console.log(`India`)
}

person("Ayush", address)

fs.readFile("gogo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`error reading the file`, err)
    return
  }
  console.log(data)
})