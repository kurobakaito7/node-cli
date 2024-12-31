import readline from "node:readline";

// 让输入流处理键盘事件
readline.emitKeypressEvents(process.stdin);

// 禁用内置的一些键盘事件处理 如 ctrl+c 退出进程
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
    console.log(str, key);
})