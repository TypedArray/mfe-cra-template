module.exports = {
  name: 'module2',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  remotes: {
    shared: `shared@${process.env.PUBLIC_URL_SHARED}/remoteEntry.js`,
  },
  shared: require('../../.modulerc.shared.js'),
};
