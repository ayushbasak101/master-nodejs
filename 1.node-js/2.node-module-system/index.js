import { div, mul, sub, sum } from "./first-module.js";
console.log(sum(1, 9))
console.log(sub(5, 2))
console.log(mul(5, 2))
console.log(div(0, 10))

// error handling 
try {
  console.log("trying to devide it by 0")
  let result = div(0, 0);
  console.log(result)
} catch (error) {
  console.log("Caught an error", error.message);
}