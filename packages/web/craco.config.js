const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@input-bg': 'transparent', '@calendar-bg': 'transparent', '@calendar-input-bg': 'transparent' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};