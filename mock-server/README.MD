# Mock服务

此项目用于mock前端项目后端数据，可以单独使用。技术栈为 [hapi.js](https://hapi.dev/)。

## 安装

```
npm install
# or
yarn
```

## 用法

> 如果需要进行调试，可根据使用的IDE进行配置。

1. `nodemon`进行调用此服务，`nodemon`可以实现后端代码热部署

```
nodemon server.js
```

2. 使用`node`调用服务
```
node server.js
```

## 结构

```
.
├── app.js //hapi后端主程序
├── config
│   └── index.js //配置项，可配置端口号等等
├── models //存放mock数据，你可以想像成数据库
│   └── user.js
├── package.json
├── plugins //暂未使用插件
├── routes //mock的后端路由，只需要参考hello-world.js去配置后端路由和mock数据即可
│   ├── hello-world.js
│   ├── index.js
│   └── user.js
├── utils //暂未使用工具类
├── vo //结果view object，返回的格式。可根据需求定制
    └── Result.js
```
