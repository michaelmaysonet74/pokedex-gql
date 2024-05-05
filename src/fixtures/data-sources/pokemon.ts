import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { PokemonAbility } from "../../data-sources/poke-api/models/pokemon-ability";
import { PokemonMove } from "../../data-sources/poke-api/models/pokemon-move";
import { PokemonSprites } from "../../data-sources/poke-api/models/pokemon-sprites";
import {
  PokemonStat,
  PokemonStatName,
} from "../../data-sources/poke-api/models/pokemon-stat";
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
    url: "https://pokeapi.co/api/v2/type/11",
  },
};

export const fakeAbility: PokemonAbility = {
  ability: {
    name: "torrent",
    url: "https://pokeapi.co/api/v2/ability/67/",
  },
  is_hidden: false,
};

export const fakeSprites: PokemonSprites = {
  front_default:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
};

export const fakeSprites2: PokemonSprites = {
  front_default:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
};

export const fakeStats: PokemonStat[] = [
  {
    base_stat: 44,
    stat: {
      name: PokemonStatName.HP,
    },
  },
  {
    base_stat: 48,
    stat: {
      name: PokemonStatName.ATTACK,
    },
  },
  {
    base_stat: 65,
    stat: {
      name: PokemonStatName.DEFENSE,
    },
  },
  {
    base_stat: 50,
    stat: {
      name: PokemonStatName.SPECIAL_ATTACK,
    },
  },
  {
    base_stat: 64,
    stat: {
      name: PokemonStatName.SPECIAL_DEFENSE,
    },
  },
  {
    base_stat: 43,
    stat: {
      name: PokemonStatName.SPEED,
    },
  },
];

export const fakeStats2: PokemonStat[] = [
  {
    base_stat: 59,
    stat: {
      name: PokemonStatName.HP,
    },
  },
  {
    base_stat: 63,
    stat: {
      name: PokemonStatName.ATTACK,
    },
  },
  {
    base_stat: 80,
    stat: {
      name: PokemonStatName.DEFENSE,
    },
  },
  {
    base_stat: 65,
    stat: {
      name: PokemonStatName.SPECIAL_ATTACK,
    },
  },
  {
    base_stat: 80,
    stat: {
      name: PokemonStatName.SPECIAL_DEFENSE,
    },
  },
  {
    base_stat: 58,
    stat: {
      name: PokemonStatName.SPEED,
    },
  },
];

export const fakePokemon: Pokemon = {
  id: 7,
  name: "squirtle",
  moves: [fakeMove, fakeMove2, fakeMove3, fakeMove4],
  types: [fakeType],
  abilities: [fakeAbility],
  height: 5,
  weight: 90,
  stats: fakeStats,
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
  stats: fakeStats2,
  sprites: fakeSprites2,
};
