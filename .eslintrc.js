module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: [
        "schema-types.d.ts",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": 0,
      },
    },
  ],
};
