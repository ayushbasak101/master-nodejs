const { greet } = require("./node-module-wrapper")
greet("Ayush")

// optional

/*
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("filename in node-module-wrapper", __filename);
console.log("dirname in node-module-wrapper", __dirname);

export function greet(name) {
  console.log(`hello ${name}`);
}
*/