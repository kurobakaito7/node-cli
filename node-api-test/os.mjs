import os from 'node:os'

// os.EOL是换行符，在windows上是 \r\n 在其他系统上是\n 
// console.log('aaa' + os.EOL + 'bbb' + os.EOL);

// 返回cpu 内核信息
// console.log(os.cpus());

// 系统类型
// console.log(os.type());

// 当前用户相关信息
// console.log(os.userInfo());

// 可用内存
// console.log(os.freemem());

// 总内存
// console.log(os.totalmem());

// home 目录
// console.log(os.homedir());

// 网卡信息
console.log(os.networkInterfaces());