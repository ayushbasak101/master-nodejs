#  Node.js `EventEmitter` – ES Module Example

##  What is `EventEmitter`?

- `EventEmitter` is a class from Node.js’s built-in **`events`** module.
- It helps you build **event-driven** and **asynchronous** applications.
- Think of it like a way to **subscribe to and trigger events**, similar to how event listeners work in the browser.

---

##  ES Module Example

```js
import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 69);
````

---

##  Explanation

| Line                                     | Meaning                                                              |
| ---------------------------------------- | -------------------------------------------------------------------- |
| `import EventEmitter from 'node:events'` | Import the `EventEmitter` class using **ES module syntax**.          |
| `new EventEmitter()`                     | Creates a new instance of the event emitter.                         |
| `on('start', listener)`                  | Registers a listener for the `'start'` event.                        |
| `emit('start', 69)`                      | Emits the `'start'` event and sends the number `69` to the listener. |

---

##  Output

```
started 69
```

---

##  Use Cases

* 🔌 Handle events like user login, file uploads, etc.
* 🗂 Trigger workflows when certain actions occur.
* 🔁 Create lightweight publish-subscribe systems in Node.js.

---



