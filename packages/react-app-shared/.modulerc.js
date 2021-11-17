module.exports = {
  name: 'shared',
  filename: 'remoteEntry.js',
  exposes: {
    './utils': './src/utils',
    './components': './src/components',
    // './interfaces': './src/interfaces',
    './layouts': './src/layouts',
    './contexts': './src/contexts',
    './constants': './src/constants',
  },
  remotes: {},
  shared: require('../../.modulerc.shared.js'),
};
