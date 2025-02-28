import fs from 'node:fs'
import path from 'node:path';

function copyDir(srcDir, destDkir) {
    fs.mkdirSync(destDkir, { recursive: true });
    
    for(const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file);
        const destFile = path.resolve(destDkir, file);
        copy(srcFile, destFile);
    }
}

function copy(src, dest) {
    const stat = fs.statSync(src);
    if(stat.isDirectory()) {
        copyDir(src, dest);
    }else {
        fs.copyFileSync(src, dest);
    }
}


copy('aaa', 'aaa2');

// 或者fse中的copySync
// fse.copySync('./src', './aaa/bbb')
