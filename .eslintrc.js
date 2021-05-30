module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  plugins: [
    'react'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module',
  },
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'react/react-in-jsx-scope': 'off'
  }
};
