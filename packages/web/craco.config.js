const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            //modifyVars: { '@primary-color': '#1B203D', '@layout-sider-background': '##F4F7FE' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};