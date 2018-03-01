# 前端开发环境搭建

### 准备

先下载安装下列软件包

[Git](https://git-scm.com/downloads)

[NodeJs](https://nodejs.org/en/download/current/)

[Yarn](https://yarnpkg.com/lang/en/docs/install/)


安装完成后打开命令行，分别输入列命令确认是否安装成功，如果没有显示错误信息则表示已经安装成功

> 注意：windows在的环境变量不是实时更新如果你安装前已经打开了命令行，则需要关闭后重新打开

```
git --version 
```
```
node -v
```
```
yarn -v
```

### 安装全局依赖

windows环境以管理员方式打开命令行，否则安装会失败。一般右键命令行的快捷键可以直接选择

```
yarn global add webpack webpack-dev-server ts-node typescript tslint
```

正常会安装成功，如果失败请查看错误信息具体问题具体解决


### 开发工具VS Code

VS Code是一个轻量级的编辑器，支持前端所有语言，集成版本控制git

[Visual Studio Code](https://code.visualstudio.com/)


建议安装的扩展

Code Spell Checker --  英文语言检查，有效解决因单词拼写错误而引起的bug, 同时提高你的英文水平

TSLint -- TS方法检查器，可自动修正语言规则错误

REST Client -- RESTful API 调用客户端原理为linux curl命令

Beautify -- 代码格式化工具


# 必要的知识


[Typescript](https://www.typescriptlang.org/docs/home.html)

[Less](http://lesscss.org/)

但前端最基础依然是HTML, CSS, Javascript这些是最基本的东西。














