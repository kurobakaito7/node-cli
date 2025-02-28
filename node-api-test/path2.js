const path = require('node:path')

// 把多个路径连接起来，解析其中的路径，合并成一个路径
const filePath = path.join('../', 'node-api-test', './', 'path2.js');

console.log(filePath);

// 也是连接多个路径，但是最后会返回一个绝对路径
const filePath2 = path.resolve('../', 'node-api-test', './', 'path2.js');

console.log(filePath2);

// a 到 b 的相对路径
console.log(path.relative('/a/b/c', '/a/d'));

// 解析路径
console.log(path.parse(__filename));