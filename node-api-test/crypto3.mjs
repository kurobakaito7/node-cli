import crypto from 'node:crypto';

// 产生随机数
console.log(crypto.randomInt(10));
console.log(crypto.randomInt(10));
console.log(crypto.randomInt(10));
console.log(crypto.randomInt(10));

// 唯一的uid
console.log(crypto.randomUUID());
console.log(crypto.randomUUID());