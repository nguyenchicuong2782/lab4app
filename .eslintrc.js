module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  "prettier/prettier": [
    "error",
    {
      "singleQuote": true,
      "parser": "flow"
    }
  ]
};