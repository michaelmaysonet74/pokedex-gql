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

### Unit Tests

```bash
# Run All Unit Tests
$ npm test

# Run Specific Unit Test
$ npm run jest <path of test>
```

### Generate Schema Types

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
