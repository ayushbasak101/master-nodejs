
# JavaScript Module Systems

## 1. ES Modules (ESM)
- **Exporting**: Use `export` to expose variables/functions.
  ```javascript
  export const myVariable = 42;
  export function myFunction() { ... }
  ```
- **Importing**: Use `import` to bring in exported members.
  ```javascript
  import { myVariable, myFunction } from './myModule.js';
  ```

## 2. CommonJS
- **Exporting**: Use `module.exports` to export members.
  ```javascript
  module.exports = { myVariable, myFunction };
  ```
- **Importing**: Use `require` to import modules.
  ```javascript
  const { myVariable, myFunction } = require('./myModule');
  ```

## 3. Module
- A self-contained piece of code that encapsulates functionality, promoting reusability and avoiding global namespace pollution.

## 4. Module Wrapper
- Each module is wrapped in a function to create a private scope, preventing variable conflicts.
  ```javascript
  (function (exports, require, module, __filename, __dirname) {
      // Module code here
  });
  ```
---

