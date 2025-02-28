import crypto from 'node:crypto'

// 加密
export function md5(str) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');// 十六进制
}

console.log(md5('123456'));