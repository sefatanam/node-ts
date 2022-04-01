module.exports = {
  'env': {
    'node': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': ['error', {'code': 120}],
    'new-cap': ['error', {'newIsCap': true, 'properties': false}],
  },
};
