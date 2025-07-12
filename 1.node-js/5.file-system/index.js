const fs=require("fs")
const path=require("path")
// importing everything needed


const datapath = path.join(__dirname, "data")

// if file exist or not
if (!fs.existsSync(datapath)) {
  fs.mkdirSync(datapath)
  // make a file namsed data
  console.log(`data folder is made`)
}

// in data file there is examle.txt
const filepath = path.join(datapath, 'example.txt')
// In that what I'm writing
fs.writeFileSync(filepath, "hello from oath module")


// reading file with sync method
const readingFile = fs.readFileSync(filepath, "utf-8")
console.log(`Reading the file ${readingFile}`)

// updating the file sync method
const changedFile = fs.appendFileSync(filepath, "\nhello it's updated")

//async way of creating file
const asyncFile = path.join(datapath, "async-example.txt")
fs.writeFile(asyncFile, "this async way of file", (err) => {
  if (err) throw err; 
  console.log(`Async file of creating succesfully`)

  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("added data",data)
  })
  fs.appendFile(asyncFile, "\n file edited fine in Async way", (err) => {
    if (err) throw err
    console.log(`updated the new file`)
  })
})

