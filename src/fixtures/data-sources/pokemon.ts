import {
  Pokemon,
  PokemonAbility,
  PokemonMove,
  PokemonType,
} from "../../data-sources/poke-api/models/pokemon";

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

export const fakePokemon: Pokemon = {
  id: 7,
  name: "squirtle",
  moves: [fakeMove, fakeMove2, fakeMove3, fakeMove4],
  types: [fakeType],
  abilities: [fakeAbility],
  height: 5,
  weight: 90,
};
