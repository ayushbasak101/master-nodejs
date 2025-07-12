#  Node.js `path` Module Notes

## What is `path`?

The `path` module in Node.js provides utilities for working with file and directory paths. It's part of the Node.js core modules, so no installation is needed.

```js
const path = require('path');
````

---

##  1. Get Directory Name

```js
path.dirname(__filename)
```

🔹 Returns the **directory path** of the current file.

Example:

```js
Directory name: /Users/ayush/Desktop/project
```

---

##  2. Get File Name

```js
path.basename(__filename)
```

🔹 Returns the **file name** from a path.

 Example:

```js
Filename: index.js
```

---

##  3. Get File Extension

```js
path.extname(__filename)
```

🔹 Returns the **extension** of the file (including the dot).

 Example:

```js
Extension name: .js
```

---

##  4. Join Paths

```js
path.join("/user", "andu", "pandu")
```

🔹 Joins all given path segments into a single path.

✅ Output:

```js
joined path: /user/andu/pandu
```

🧠 Automatically handles slashes (`/`) and avoids redundancy.

---

##  5. Normalize Path

```js
path.normalize("/user/../law")
```

🔹 Resolves `..`, `.` and double slashes to return a **clean path**.

 Output:

```js
normalise path: /law
```

Correct usage:

```js
const normalisedPath = path.normalize("/user/../law");
```

---
