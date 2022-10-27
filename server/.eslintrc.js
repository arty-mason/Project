module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "indent": ["error", 2],
    "linebreak-style": "off",
    "quotes": ["error", "double"],
    "no-unused-vars": "warn",
    "object-curly-spacing": "always",
  },
  parserOptions: {
    "ecmaVersion": 8,
  },
};
