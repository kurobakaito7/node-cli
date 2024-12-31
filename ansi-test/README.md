# 笔记

## ANSI 控制字符修改光标位置

node 内置的 readline 模块也可以做这个，比如 cursorTo、clearScreenDown 等方法

但它并不全，想做更多的控制，我们会用 `ansi-escapes` 这个包来做(或者 `sisteransi`)

## 打印颜色

包
- `chalk`
- `ansi-colors`
- `colors`