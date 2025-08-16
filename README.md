# pokedex-gql

GraphQL Pokedex Datasource

![](https://lucid.app/publicSegments/view/6c8b3481-36a2-4b71-b7da-4fd4efc6be11/image.png)

<table>
<tr>
<td>


```graphql
query GetPokemonById {
    pokemonById(id: "148") {
        id
        name
        category
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
            to {
                id
                name
            }
        }
        weaknesses
        resistances
        immunities
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
            "id": "148",
            "name": "Dragonair",
            "category": "Dragon",
            "types": ["Dragon"],
            "abilities": [
                {
                    "name": "Shed Skin",
                    "effect": "Heals the body by shedding.",
                    "isHidden": false
                },
                {
                    "name": "Marvel Scale",
                    "effect": "Ups DEFENSE if suffering.",
                    "isHidden": true
                }
            ],
            "evolution": {
                "from": {
                    "id": "147",
                    "name": "Dratini"
                },
                "to": [
                    {
                        "id": "149",
                        "name": "Dragonite"
                    }
                ]
            },
            "weaknesses": [
                "Dragon",
                "Fairy",
                "Ice"
            ],
            "resistances": [
                "Electric",
                "Fire",
                "Grass",
                "Water"
            ],
            "immunities": [],
            "baseStats": {
                "hp": 61,
                "attack": 84,
                "defense": 65,
                "specialAttack": 70,
                "specialDefense": 70,
                "speed": 70,
                "total": 420
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
- Docker (optional, but recommended for local development)

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
