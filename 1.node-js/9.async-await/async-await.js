const { error } = require("console")

// simple async await
function latefxn(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
async function delayedGreet(name) {
  await latefxn(2000)
  console.log(name)
}

delayedGreet(`Ayush`)

// complex async await with error
async function divFxn(num1,num2) {
  try {
    if (num2 === 0) throw new Error("cont divisible by 0")
      return num1 / num2
  } catch (error) {
    console.error(error, "error")
    return null
  }
}

async function mainFxn() {
  // await divFxn(10, 0)
  console.log(await divFxn(10,2))
}

mainFxn()
