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
fs.writeFileSync(filepath,"hello from oath module")