console.log("filename in node-mdule-wrapper", __filename);
console.log("dirname in node-mdule-wrapper", __dirname);
 function greet(name) {
  console.log(`hello ${name}`)
}

module.exports = { greet };
  