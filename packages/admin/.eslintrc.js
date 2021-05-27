const path = require('path');

module.exports = {
  env: {
    browser: true,
  },

  extends: ['plugin:react/recommended'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    babelOptions: {
      configFile: path.resolve(__dirname, '.babelrc'),
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },

  globals: {
    VERSION: 'readonly',
    think: 'readonly',
  },

  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
