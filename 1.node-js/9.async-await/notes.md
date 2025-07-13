#  JavaScript `async/await` - Quick Notes

##  What is `async/await`?

> `async/await` is **syntactic sugar** built on top of Promises to write asynchronous code in a **synchronous-looking** way.

- `async` marks a function as asynchronous (returns a Promise).
- `await` pauses the execution until the Promise resolves.

---

##  Example 1: Simple `async/await` with Delay

```js
function latefxn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await latefxn(2000);
  console.log(name);
}

delayedGreet("Ayush");
````

###  Explanation:

* `latefxn()` returns a Promise that resolves after `time` ms.
* `await latefxn(2000)` pauses execution for 2 seconds.
* Then `console.log(name)` prints "Ayush".

####  Output:

```
(wait 2 seconds)
Ayush
```

---

##  Example 2: `async/await` with Error Handling

```js
async function divFxn(num1, num2) {
  try {
    if (num2 === 0) throw new Error("cant divide by 0");
    return num1 / num2;
  } catch (error) {
    console.error(error, "error");
    return null;
  }
}

async function mainFxn() {
  console.log(await divFxn(10, 2)); // valid division
  // await divFxn(10, 0); // optional: test error case
}

mainFxn();
```

###  Explanation:

* `divFxn()` is an async function using `try...catch`.
* It throws an error manually if `num2 === 0`.
* The `await` keyword ensures result is fetched **before** logging.
* `mainFxn()` demonstrates calling an async function with `await`.

####  Output:

```
5
```

(Or error if `divFxn(10, 0)` is called.)

---
##  Tips

* `await` only works **inside** `async` functions.
* Use `try/catch` to safely handle rejected Promises.
 
---