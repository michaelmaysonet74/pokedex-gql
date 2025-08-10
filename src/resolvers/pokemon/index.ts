import { gql } from "apollo-server";
import { SchemaPokemon } from "../../schema-types";
import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { TypeChart } from "../../data-sources/pokemon-type-chart/models/type-chart";
import { getName } from "./name";
import { getMoves } from "./moves";
import { getTypes } from "./types";
import { getAbilities } from "./abilities";
import { getMeasurement } from "./measurement";
import { getEntry } from "./entry";
import { getSprite } from "./sprite";
import { getEvolution } from "./evolution";
import { getWeaknesses } from "./weaknesses";
import { getBaseStats } from "./base-stats";
import { getCategory } from "./category";
import { getImmunities } from "./immunities";
import { getResistances } from "./resistances";

export interface MetaPokemon extends SchemaPokemon {
  _meta?: {
    pokemonDetails?: Pokemon;
    typeChart?: TypeChart;
  };
}

const PokemonSchema = gql`
  """
  Main line Pokemon game versions.
  """
  enum GameVersion {
    red
    blue
    yellow
    gold
    silver
    crystal
    ruby
    sapphire
    emerald
    diamond
    pearl
    platinum
    black
    white
    x
    y
    sun
    moon
    sword
    shield
    scarlet
    violet
  }

  """
  Supported languages.
  """
  enum Language {
    en
    es
  }

  """
  All available Pokemon types.
  """
  enum PokemonType {
    Bug
    Dark
    Dragon
    Electric
    Fairy
    Fighting
    Fire
    Flying
    Ghost
    Grass
    Ground
    Ice
    Normal
    Poison
    Psychic
    Rock
    Steel
    Water
  }

  """
  Represents the details of a Pokemon.
  """
  type Pokemon {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID!

    "Pokemon's name"
    name: String

    "List of moves that this Pokemon can learn."
    moves: [String]

    "Types that this Pokemon has, should not be more than two."
    types: [PokemonType!]

    "List of abilities this Pokemon can have."
    abilities: [Ability]

    "Pokemon's measurement"
    measurement: Measurement

    "Pokedex flavor text entries for this Pokemon."
    entry(language: Language, version: GameVersion): String

    "URL of Pokemon's sprite"
    sprite: String

    "Pokemon's evolution chain"
    evolution: EvolutionChain

    "List of types that this Pokemon is immune to."
    immunities: [PokemonType!]

    "List of types that this Pokemon resist."
    resistances: [PokemonType!]

    "List of types that this Pokemon is weak to."
    weaknesses: [PokemonType!]

    "Pokemon's base stats"
    baseStats: BaseStats

    "Pokemon's category"
    category(language: Language): String
  }
`;

const PokemonResolver = {
  name: getName,
  moves: getMoves,
  types: getTypes,
  abilities: getAbilities,
  measurement: getMeasurement,
  entry: getEntry,
  sprite: getSprite,
  evolution: getEvolution,
  immunities: getImmunities,
  resistances: getResistances,
  weaknesses: getWeaknesses,
  baseStats: getBaseStats,
  category: getCategory,
};

export default {
  resolver: PokemonResolver,
  schema: PokemonSchema,
};
