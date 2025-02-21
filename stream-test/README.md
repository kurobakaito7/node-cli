# stream 流

## 对流的认识

**流就是分段的传输内容，比如从服务端像浏览器返回响应数据的流，读取文件的流等。**

**流和流之间可以通过管道 pipe 连接，上个流的输出作为下个流的输入。**

在 node 里，流一共有 4 种：可读流 Readable、可写流 Writable、双工流 Duplex、转换流 Transform 

```javascript
import stream from 'node:stream';

// 可读流
const Readable = stream.Readable;
// 可写流
const Writable = stream.Writable;
// 双工流
const Duplex = stream.Duplex;
// 转换流
const Transform = stream.Transform;
```
其余的流都是基于这 4 种流封装出来的。


- Readable：实现 _read 方法，通过 push 传入内容
- Writable：实现 _write 方法，通过 next 消费内容
- Duplex：实现 _read、_write，可读可写
- Transform：实现 _transform，对写入的内容做转换再传出去，继承自 Duplex

实例：
比如 fs.createReadStream、http 的 request 是 Readable 的实现，fs.createWriteStream、http 的 response 是 Writable 的实现，net 的 Socket 是 Duplex 的实现，zlib.createGzip 是 Transform 的实现。