import { PokemonAbility } from "./pokemon-ability";
import { PokemonMove } from "./pokemon-move";
import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStat } from "./pokemon-stat";
import { PokemonType } from "./pokemon-type";

export type PokemonId = string;
export type PokemonName = string;
export type PokemonNo = number;

export interface Pokemon {
  id: PokemonNo;
  name: PokemonName;
  moves: PokemonMove[];
  types: PokemonType[];
  abilities: PokemonAbility[];
  /* Pokemon's Height in decimeters. */
  height: number;
  /* Pokemon's Weight in hectograms. */
  weight: number;
  stats: PokemonStat[];
  sprites: PokemonSprites;
}
