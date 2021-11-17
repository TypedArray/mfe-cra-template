/**
 * 运行时通用共享依赖
 */
module.exports = [
  {
    'cos-js-sdk-v5': {
      singleton: true,
      requiredVersion: false,
    },
    delay: {
      singleton: true,
      requiredVersion: false,
    },
    formik: {
      singleton: true,
      requiredVersion: false,
    },
    'hoist-non-react-statics': {
      singleton: true,
      requiredVersion: false,
    },
    'js-cookie': {
      singleton: true,
      requiredVersion: false,
    },
    'p-memoize': {
      singleton: true,
      requiredVersion: false,
    },
    react: {
      eager: true,
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: false,
    },
    'react-router': {
      singleton: true,
      requiredVersion: false,
    },
    'react-router-config': {
      singleton: true,
      requiredVersion: false,
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: false,
    },
    'react-spring': {
      singleton: true,
      requiredVersion: false,
    },
    'react-virtualized-auto-sizer': {
      singleton: true,
      requiredVersion: false,
    },
    swr: {
      singleton: true,
      requiredVersion: false,
    },
    uuid: {
      singleton: true,
      requiredVersion: false,
    },
    warning: {
      singleton: true,
      requiredVersion: false,
    },
    yup: {
      singleton: true,
      requiredVersion: false,
    },
  },
];
