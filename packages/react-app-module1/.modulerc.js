module.exports = {
  name: 'module1',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  remotes: {
    shared: `shared@${process.env.PUBLIC_URL_SHRED}/remoteEntry.js`,
  },
  shared: require('../../.modulerc.shared.js'),
};
