# pokemon-graphql

A Pokemon GraphQL API PoC

## Getting Started

### Pre-requisites

- node >= 14.0.0
- npm >= 6.14.0

### Local Development

```bash
# Install Dependencies
$ npm i

# Start Apollo Server
$ npm run dev
```

### Run All Unit Tests

```bash
$ npm test
```

### Run Specific Unit Test

```bash
$ npm run jest <path of test>
```

### Re-generate Schema Types

```bash
$ npm run generate
```

### Linters

```bash
# Lint Source Code (including the GraphQL Schema)
$ npm run lint

# Make the linter fix the Source Code
$ npm run lint:fix

# Lint Only the GraphQL Schema
$ npm run lint:schema
```
