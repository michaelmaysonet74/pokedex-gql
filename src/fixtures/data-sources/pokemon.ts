import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { PokemonAbility } from "../../data-sources/poke-api/models/pokemon-ability";
import { PokemonMove } from "../../data-sources/poke-api/models/pokemon-move";
import { PokemonSprites } from "../../data-sources/poke-api/models/pokemon-sprites";
import { PokemonType } from "../../data-sources/poke-api/models/pokemon-type";

export const fakeMove: PokemonMove = {
  move: {
    name: "tackle",
  },
};

export const fakeMove2: PokemonMove = {
  move: {
    name: "bite",
  },
};

export const fakeMove3: PokemonMove = {
  move: {
    name: "water-gun",
  },
};

export const fakeMove4: PokemonMove = {
  move: {
    name: "bubble",
  },
};

export const fakeType: PokemonType = {
  type: {
    name: "water",
  },
};

export const fakeAbility: PokemonAbility = {
  ability: {
    name: "torrent",
  },
};

export const fakeSprites: PokemonSprites = {
  front_default:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
};

export const fakeSprites2: PokemonSprites = {
  front_default:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
};

export const fakePokemon: Pokemon = {
  id: 7,
  name: "squirtle",
  moves: [fakeMove, fakeMove2, fakeMove3, fakeMove4],
  types: [fakeType],
  abilities: [fakeAbility],
  height: 5,
  weight: 90,
  stats: [],
  sprites: fakeSprites,
};

export const fakePokemon2: Pokemon = {
  id: 8,
  name: "wartortle",
  moves: [fakeMove, fakeMove2, fakeMove3, fakeMove4],
  types: [fakeType],
  abilities: [fakeAbility],
  height: 10,
  weight: 225,
  stats: [],
  sprites: fakeSprites2,
};
