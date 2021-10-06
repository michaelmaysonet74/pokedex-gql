import { SchemaPokemon, SchemaPokemonType } from "../../schema-types";

export const fakePokemonById: SchemaPokemon = {
  id: "7",
  name: "squirtle",
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
};
