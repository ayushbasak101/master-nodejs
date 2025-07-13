// basic promise
function lateFxn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

console.log(`basic promise is made`)

lateFxn(2000).then(() => {
  console.log(`this will run after 2 second`)
})

// promise with errors

function devidefxn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("We can't devide the number with 0")
    }
    else {
      resolve(num1/num2)
    }
  })
}
// promified fxn

devidefxn(10, 0).then((result) => {
  console.log(result)
}).catch((error) => {
  console.error(`hey the error is ${error}`)
})