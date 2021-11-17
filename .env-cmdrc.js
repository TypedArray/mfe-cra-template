// const { version } = require('./package.json');
require('dotenv-expand')(require('dotenv').config());

const ports = {
  PORT_MAIN: '3000',
  PORT_SHARED: '3001',
  PORT_MODULE1: '3002',
  PORT_MODULE2: '3003',
};
module.exports = {
  start: {
    ...ports,

    // 主项目
    PUBLIC_URL_MAIN: `//localhost:${ports.PORT_MAIN}`,
    // 公共依赖
    PUBLIC_URL_SHARED: `//localhost:${ports.PORT_SHARED}`,
    // 模块一
    PUBLIC_URL_MODULE1: `//localhost:${ports.PORT_MODULE1}`,
    // 模块二
    PUBLIC_URL_MODULE2: `//localhost:${ports.PORT_MODULE2}`,
  },
  build: {
    // 主项目
    PUBLIC_URL_MAIN: '/modules/main',
    // 公共依赖
    PUBLIC_URL_SHARED: '/modules/shared',
    // 模块一
    PUBLIC_URL_MODULE1: '/modules/module1',
    // 模块二
    PUBLIC_URL_MODULE2: '/modules/module2',
  },
};
