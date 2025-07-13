function lateFxn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

console.log(`basic promise is made`)

lateFxn(2000).then(() => {
  console.log(`this will run after 2 second`)
})

