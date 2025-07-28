# pokedex-gql

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
      types {
        primary
        secondary
      }
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
      baseStats {
        hp  
        attack
        defense
        specialAttack
        specialDefense
        speed
        total
      }
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
            "types": {
                "primary": "Dragon",
                "secondary": "Flying"
            },
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
            ],
            "baseStats": {
                "hp": 91,
                "attack": 134,
                "defense": 95,
                "specialAttack": 100,
                "specialDefense": 100,
                "speed": 80,
                "total": 600
            }
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

Docker Compose is also available for local development:

```bash
$ docker compose up
```

__Note__: Using Docker Compose is optional, but highly recommended if  you don't want to run other services locally, like the [pokemon-type-chart](https://github.com/michaelmaysonet74/pokemon-type-chart) service.

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
