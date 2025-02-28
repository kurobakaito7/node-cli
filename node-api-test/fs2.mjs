import fs from 'fs'
import { EOL } from 'os'

fs.writeFileSync('aaa.txt', 'hello'+EOL);

setTimeout(() => {
    fs.appendFileSync('aaa.txt', 'world'+EOL);
}, 2000);

setTimeout(() => {
    fs.unlinkSync('aaa.txt');
}, 4000);