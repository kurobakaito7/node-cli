# 本地注册全局命令

## 使用 commander 封装cli

## 注册为全局命令

package.json 添加 bin 字段，指定命令名和对应的文件路径：
```json
{
  "bin": {
    "my-cli": "./dist/cli.js"
  }
}
```

在cli.ts 文件开头加上
```s
#!/usr/bin/env node
```
这行代码是告诉 shell 用 node 去执行这个文件，就和 node ./dist/cli.js 一样。

然后在项目根目录执行 `npm link` 就可以注册为全局命令了。

## 删除注册的本地命令

```bash
 npm uninstall -g my-astTransform-cli
```
