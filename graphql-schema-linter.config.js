module.exports = {
  schemaPaths: ["./src/**/*.graphql"],
  rules: [
    "deprecations-have-a-reason",
    "enum-values-sorted-alphabetically",
    "fields-are-camel-cased",
    "fields-have-descriptions",
    "input-object-values-are-camel-cased",
    "types-are-capitalized",
  ],
  rulesOptions: {
    "enum-values-sorted-alphabetically": {
      sortOrder: "lexicographical",
    },
  },
};
