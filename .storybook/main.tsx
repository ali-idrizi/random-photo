const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../lib'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-links', {
    name: '@storybook/addon-styling',
    options: {
      postCss: true
    }
  }],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  }
};