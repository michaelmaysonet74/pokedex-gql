module.exports = {
  schemaPaths: ["./src/**/*.graphql"],
  rules: [
    "enum-values-sorted-alphabetically",
    "fields-are-camel-cased",
    "input-object-values-are-camel-cased",
    "types-are-capitalized",
  ],
  rulesOptions: {
    "enum-values-sorted-alphabetically": {
      sortOrder: "lexicographical",
    },
  },
};
