import { gql } from "apollo-server";
import { SchemaBaseStats } from "../../schema-types";
import { PokemonStat } from "../../data-sources/poke-api/models/pokemon-stat";
import { getHp } from "./hp";
import { getAttack } from "./attack";
import { getDefense } from "./defense";
import { getSpecialAttack } from "./special-attack";
import { getSpecialDefense } from "./special-defense";
import { getSpeed } from "./speed";

export interface MetaBaseStats extends SchemaBaseStats {
  _meta?: {
    stats: PokemonStat[];
  };
}

const BaseStatsSchema = gql`
  """
  Represents the base stats of a Pokemon.
  """
  type BaseStats {
    "Pokemon's base HP"
    hp: Int!

    "Pokemon's base Attack"
    attack: Int!

    "Pokemon's base Defense"
    defense: Int!

    "Pokemon's base Special Attack"
    specialAttack: Int!

    "Pokemon's base Special Defense"
    specialDefense: Int!

    "Pokemon's base Speed"
    speed: Int!
  }
`;

const BaseStatsResolver = {
  hp: getHp,
  attack: getAttack,
  defense: getDefense,
  specialAttack: getSpecialAttack,
  specialDefense: getSpecialDefense,
  speed: getSpeed,
};

export default {
  resolver: BaseStatsResolver,
  schema: BaseStatsSchema,
};
