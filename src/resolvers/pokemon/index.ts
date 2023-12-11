import { SchemaPokemon } from "../../schema-types";
import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { getName } from "./name";
import { getMoves } from "./moves";
import { getTypes } from "./types";
import { getAbilities } from "./abilities";
import { getMeasurement } from "./measurement";
import { getIsMonoType } from "./is-mono-type";
import { getEntry } from "./entry";
import { getSprite } from "./sprite";
import { getEvolution } from "./evolution";
import { gql } from "apollo-server";
import { getWeaknesses } from "./weaknesses";
import { getBaseStats } from "./base-stats";
import { getCategory } from "./category";

export interface MetaPokemon extends SchemaPokemon {
  _meta?: {
    pokemonDetails?: Pokemon;
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

    "List of types that this Pokemon has, should not be more than two."
    types: [PokemonType]

    "List of abilieties this Pokemon can have."
    abilities: [Ability]

    "Pokemon's measurement"
    measurement: Measurement

    "Determines if Pokemon only have one type or not."
    isMonoType: Boolean

    "Pokedex flavor text entries for this Pokemon."
    entry(language: Language, version: GameVersion): String

    "URL of Pokemon's sprite"
    sprite: String

    "Pokemon's evolution chain"
    evolution: EvolutionChain

    "List of types that this Pokemon is weak against."
    weaknesses: [PokemonType]

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
  isMonoType: getIsMonoType,
  entry: getEntry,
  sprite: getSprite,
  evolution: getEvolution,
  weaknesses: getWeaknesses,
  baseStats: getBaseStats,
  category: getCategory,
};

export default {
  resolver: PokemonResolver,
  schema: PokemonSchema,
};
