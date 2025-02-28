import url from 'node:url';

console.log(import.meta.url); // 当前文件以 file:// 开头的路径
console.log(import.meta.resolve('./a.js')); // 基于当前目录和传入的路径来解析路径

// node20 以上才有
console.log(import.meta.dirname); 
console.log(import.meta.filename); 

console.log(url.fileURLToPath(import.meta.url)); // 与 import.meta.filename 等价