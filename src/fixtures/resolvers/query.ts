import { SchemaPokemon, SchemaPokemonType } from "../../schema-types";

export const fakePokemonById: SchemaPokemon = {
  id: "7",
  name: "Squirtle",
  isMonoType: true,
  types: [SchemaPokemonType.water],
  abilities: ["Torrent"],
  moves: ["Tackle", "Bite", "Water Gun", "Bubble"],
  measurement: {
    height: "1' 64\"",
    weight: "19.8 lbs.",
  },
  entry:
    "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  evolution: {
    from: null,
  },
};

export const fakePokemonByName: SchemaPokemon = {
  id: "8",
  name: "Wartortle",
  isMonoType: true,
  types: [SchemaPokemonType.water],
  abilities: ["Torrent"],
  moves: ["Tackle", "Bite", "Water Gun", "Bubble"],
  measurement: {
    height: "3' 28\"",
    weight: "49.6 lbs.",
  },
  entry: null,
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  evolution: {
    from: {
      id: "7",
      name: "Squirtle",
    },
  },
};
