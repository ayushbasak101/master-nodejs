#  JavaScript Promises - Notes

##  What is a Promise?

> A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation.

It can be in one of **three states**:
- **Pending** – Initial state, neither fulfilled nor rejected.
- **Fulfilled** – Operation completed successfully.
- **Rejected** – Operation failed.

---

##  Basic Promise Example (Delay)

```js
function lateFxn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

console.log(`basic promise is made`);

lateFxn(2000).then(() => {
  console.log(`this will run after 2 second`);
});
````

###  Explanation:

* `lateFxn(time)` returns a Promise that resolves after the given time (milliseconds).
* `setTimeout(resolve, time)` simulates a delay.
* `.then()` runs when the promise is fulfilled.

####  Output:

```
basic promise is made
(this line shows immediately)
this will run after 2 second
(after 2 seconds)
```

---

##  Promise with Error Handling (Division)

```js
function devidefxn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("We can't devide the number with 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

devidefxn(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`hey the error is ${error}`);
  });
```

###  Explanation:

* If `num2` is zero, the promise is **rejected** with an error message.
* If not, it **resolves** with the division result.
* `.catch()` handles any rejected promise.

####  Output (when dividing by zero):

```
hey the error is We can't devide the number with 0
```

---
