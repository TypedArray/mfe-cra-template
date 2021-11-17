module.exports = {
  filename: 'remoteEntry.js',
  remotes: {
    shared: `shared@${process.env.PUBLIC_URL_SHARED}/remoteEntry.js`,
    module1: `module1@${process.env.PUBLIC_URL_MODULE1}/remoteEntry.js`,
    module2: `module2@${process.env.PUBLIC_URL_MODULE2}/remoteEntry.js`,
  },
  shared: require('../../.modulerc.shared.js'),
};
