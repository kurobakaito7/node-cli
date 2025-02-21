# 脚手架cli实现的实现思路

项目模版通过 npm 包的方式来管理，这样可以方便的切换版本，然后 cli 里选择后下载模版到临时目录，然后复制到目标目录即可。

# 用到的包

- fs-extra
- inquirer
- glob
- npminstall
- semver
- ora
- cli-spinne