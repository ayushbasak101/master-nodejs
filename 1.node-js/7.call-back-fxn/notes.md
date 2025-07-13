#  JavaScript Callback & Callback Hell - Notes

##  What is a Callback?

> A **callback** is a function passed as an argument to another function and executed after some operation completes.

###  Real-Life Analogy
Imagine ordering food at a restaurant:
- You (the caller) place an order (start a function).
- The chef (function) will call the waiter (callback) to notify you once it’s ready.

###  Simple Example

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayCountry() {
  console.log("From India");
}

greet("Ayush", sayCountry);
````

####  Output:

```
Hello, Ayush
From India
```

---

##  Callback in Node.js (fs module example)

```js
const fs = require("fs");

fs.readFile("gogo.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

* `fs.readFile` is asynchronous.
* The callback handles file content after it's read.

---

##  What is Callback Hell?

> **Callback Hell** is a situation where callbacks are nested within callbacks, making code **difficult to read, maintain, or debug**.

###  Structure:

```js
doSomething(function(result1) {
  doNext(result1, function(result2) {
    doAnother(result2, function(result3) {
      andSoOn(result3, function(finalResult) {
        // Final operation
      });
    });
  });
});
```

###  Problems:

* Hard to read
* Hard to debug
* No clear error handling
* Difficult to scale

---

##  Example of Callback Hell (with `fs`):

```js
const fs = require("fs");

fs.readFile("gogo.txt", "utf-8", (err, data) => {
  if (err) return console.error("Error reading file:", err);

  const upperData = data.toUpperCase();

  fs.writeFile("output.txt", upperData, (err) => {
    if (err) return console.error("Error writing file:", err);

    fs.readFile("output.txt", "utf-8", (err, finalData) => {
      if (err) return console.error("Error reading new file:", err);

      console.log("Final Output:", finalData);
    });
  });
});
```

---

##  Solutions to Avoid Callback Hell

###  1. Named Functions

```js
function readFileCallback(err, data) {
  if (err) return console.error(err);
  fs.writeFile("out.txt", data, writeFileCallback);
}

function writeFileCallback(err) {
  if (err) return console.error(err);
  console.log("File written successfully");
}

fs.readFile("in.txt", "utf-8", readFileCallback);
```

###  2. Use Promises

```js
const fs = require("fs").promises;

fs.readFile("in.txt", "utf-8")
  .then(data => fs.writeFile("out.txt", data.toUpperCase()))
  .then(() => console.log("Written!"))
  .catch(err => console.error(err));
```

###  3. Use `async/await`

```js
const fs = require("fs").promises;

async function processFile() {
  try {
    const data = await fs.readFile("in.txt", "utf-8");
    await fs.writeFile("out.txt", data.toUpperCase());
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
}

processFile();
```
---