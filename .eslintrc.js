const { resolve } = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      resolve(__dirname, "./tsconfig.json"),
      resolve(__dirname, "./tsconfig.eslint.json"),
    ],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
