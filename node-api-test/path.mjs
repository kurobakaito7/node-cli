import path from "node:path";
import { fileURLToPath } from "node:url";

const filePath = fileURLToPath(import.meta.url);
console.log(filePath); // ～/node-cli/node-api-test/path.mjs
console.log(path.dirname(filePath)); // ~/node-cli/node-api-test
console.log(path.basename(filePath)); // path.mjs
console.log(path.extname(filePath));  // .mjs