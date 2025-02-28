import { Buffer } from "node:buffer";

const buffer = Buffer.alloc(10);

buffer.writeUint16LE(256, 0)

console.log(buffer.readUInt16LE(0));
console.log(buffer.readUint8(0), buffer.readUint8(1));

// LE 和 BE 代表不同的数据存储顺序  大端存储(Big-endian) 和 小端存储(Little-endian)
// 解析网络协议的时候都是大端的顺序（BE），而在处理本机数据的时候可能就要用小端的顺序（LE）