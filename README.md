# poke-dex-gql

GraphQL Pokedex

![](https://lucid.app/publicSegments/view/6c8b3481-36a2-4b71-b7da-4fd4efc6be11/image.png)

<table>
<tr>
<td>


```graphql
query GetPokemonById {
    pokemonById(id: "149") {
      id
      name
      category
      isMonoType
      types
      abilities {
        name
        effect
        isHidden
      }
      evolution {
        from {
          id
          name
        }
      }
      weaknesses
    }
  }
```
</td>
<td>


```json
{
    "data": {
        "pokemonById": {
            "id": "149",
            "name": "Dragonite",
            "category": "Dragon",
            "isMonoType": false,
            "types": [
                "Dragon",
                "Flying"
            ],
            "abilities": [
                {
                    "name": "Inner Focus",
                    "effect": "Prevents flinching.",
                    "isHidden": false
                },
                {
                    "name": "Multiscale",
                    "effect": "Reduces damage when HP is full.",
                    "isHidden": true
                }
            ],
            "evolution": {
                "from": {
                    "id": "148",
                    "name": "Dragonair"
                }
            },
            "weaknesses": [
                "Ice",
                "Dragon",
                "Fairy",
                "Rock"
            ]
        }
    }
}
```
</td>
</tr>
</table>

## Getting Started

### Pre-requisites

- node >= 16
- npm >= 7.20.x

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
$ npm run test:only <path of test>
```

### Generate Schema Types

```bash
$ npm run generate
```

### Linters

```bash
# Lint Source Code
$ npm run lint

# Make the linter fix the Source Code
$ npm run lint:fix
```
