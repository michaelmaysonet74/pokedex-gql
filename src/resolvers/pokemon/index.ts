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
    black
    blue
    crystal
    diamond
    emerald
    gold
    moon
    pearl
    platinum
    red
    ruby
    sapphire
    shield
    silver
    sun
    sword
    white
    x
    y
    yellow
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
  Represents the details of a given Pokemon.
  """
  type Pokemon {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID!

    "Pokemon's name"
    name: String

    "List of moves that given Pokemon can learn."
    moves: [String]

    "List of types given Pokemon has, should not be more than two."
    types: [PokemonType]

    "List of abilieties given Pokemon can have."
    abilities: [Ability]

    "Pokemon's measurement"
    measurement: Measurement

    "Determines if pokemon only have one type or not."
    isMonoType: Boolean

    "Pokedex flavor text entries for this Pokemon."
    entry(language: Language, version: GameVersion): String

    "URL of Pokemon's sprite"
    sprite: String

    "Pokemon's evolution chain"
    evolution: EvolutionChain
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
};

export default {
  resolver: PokemonResolver,
  schema: PokemonSchema,
};
