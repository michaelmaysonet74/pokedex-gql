export interface PokemonMove {
  move: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  moves: PokemonMove[];
  types: PokemonType[];
  abilities: PokemonAbility[];
  /* Pokemon's Height in decimeters. */
  height: number;
  /* Pokemon's Weight in hectograms. */
  weight: number;
  sprites: PokemonSprites;
}
