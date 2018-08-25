const path = require("path");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (baseConfig, env, config) => {
  config.resolve.plugins = [new TsConfigPathsPlugin()];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
      use: ['awesome-typescript-loader',
        {
          loader: 'react-docgen-typescript-loader',
          options: {
            includes: ['.component\\.tsx$'],
            excludes: ['.story\\.tsx$'],
            setDisplayName: true
          }
        }
      
      ]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};