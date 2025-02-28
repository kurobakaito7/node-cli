const path = require('node:path');

// commonjs module
const filePath = __filename;
console.log(filePath); // ～/node-cli/node-api-test/path.js
console.log(path.dirname(filePath)); // ~/node-cli/node-api-test
console.log(path.basename(filePath)); // path.js
console.log(path.extname(filePath)); // .js