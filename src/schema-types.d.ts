export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type SchemaAbility = {
  __typename?: "Ability";
  effect?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SchemaAbilityEffectArgs = {
  language?: InputMaybe<SchemaLanguage>;
};

/** Represents the base stats of a Pokemon. */
export type SchemaBaseStats = {
  __typename?: "BaseStats";
  /** Pokemon's base Attack */
  attack: Scalars["Int"];
  /** Pokemon's base Defense */
  defense: Scalars["Int"];
  /** Pokemon's base HP */
  hp: Scalars["Int"];
  /** Pokemon's base Special Attack */
  specialAttack: Scalars["Int"];
  /** Pokemon's base Special Defense */
  specialDefense: Scalars["Int"];
  /** Pokemon's base Speed */
  speed: Scalars["Int"];
  /** Pokemon's total base stats */
  total: Scalars["Int"];
};

/** Represents a Pokemon Evolution */
export type SchemaEvolution = {
  /** Pokemon's id, can match pokedex number (not always). */
  id?: Maybe<Scalars["ID"]>;
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
};

/** Represents a Pokemon Evolution chain. */
export type SchemaEvolutionChain = {
  __typename?: "EvolutionChain";
  /** Represents the Pokemon it evolves from in the evolution chain. */
  from?: Maybe<SchemaEvolutionFrom>;
  /** Represents the Pokemon it evolves to in the evolution chain. */
  to?: Maybe<Array<SchemaEvolutionTo>>;
};

/** Represents a Pokemon which it evolves from. */
export type SchemaEvolutionFrom = SchemaEvolution & {
  __typename?: "EvolutionFrom";
  /** Pokemon's id, can match pokedex number (not always). */
  id?: Maybe<Scalars["ID"]>;
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
};

/** Represents a Pokemon which it evolves to. */
export type SchemaEvolutionTo = SchemaEvolution & {
  __typename?: "EvolutionTo";
  /** Pokemon's id, can match pokedex number (not always). */
  id?: Maybe<Scalars["ID"]>;
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
};

/** Main line Pokemon game versions. */
export const enum SchemaGameVersion {
  black = "black",
  blue = "blue",
  crystal = "crystal",
  diamond = "diamond",
  emerald = "emerald",
  gold = "gold",
  moon = "moon",
  pearl = "pearl",
  platinum = "platinum",
  red = "red",
  ruby = "ruby",
  sapphire = "sapphire",
  scarlet = "scarlet",
  shield = "shield",
  silver = "silver",
  sun = "sun",
  sword = "sword",
  violet = "violet",
  white = "white",
  x = "x",
  y = "y",
  yellow = "yellow",
}

/** Supported languages. */
export const enum SchemaLanguage {
  en = "en",
  es = "es",
}

/** Represents the measurement of a given entity. */
export type SchemaMeasurement = {
  __typename?: "Measurement";
  /** Entity's height */
  height?: Maybe<Scalars["String"]>;
  /** Entity's weight */
  weight?: Maybe<Scalars["String"]>;
};

/** Represents the details of a Pokemon. */
export type SchemaPokemon = {
  __typename?: "Pokemon";
  /** List of abilities this Pokemon can have. */
  abilities?: Maybe<Array<Maybe<SchemaAbility>>>;
  /** Pokemon's base stats */
  baseStats?: Maybe<SchemaBaseStats>;
  /** Pokemon's category */
  category?: Maybe<Scalars["String"]>;
  /** Pokedex flavor text entries for this Pokemon. */
  entry?: Maybe<Scalars["String"]>;
  /** Pokemon's evolution chain */
  evolution?: Maybe<SchemaEvolutionChain>;
  /** Pokemon's id, can match pokedex number (not always). */
  id: Scalars["ID"];
  /** List of types that this Pokemon is immune to. */
  immunities?: Maybe<Array<Maybe<SchemaPokemonType>>>;
  /** Determines if Pokemon only have one type or not. */
  isMonoType?: Maybe<Scalars["Boolean"]>;
  /** Pokemon's measurement */
  measurement?: Maybe<SchemaMeasurement>;
  /** List of moves that this Pokemon can learn. */
  moves?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
  /** List of types that this Pokemon resist. */
  resistances?: Maybe<Array<Maybe<SchemaPokemonType>>>;
  /** URL of Pokemon's sprite */
  sprite?: Maybe<Scalars["String"]>;
  /** Types that this Pokemon has, should not be more than two. */
  types?: Maybe<SchemaPokemonTypes>;
  /** List of types that this Pokemon is weak to. */
  weaknesses?: Maybe<Array<Maybe<SchemaPokemonType>>>;
};

/** Represents the details of a Pokemon. */
export type SchemaPokemonCategoryArgs = {
  language?: InputMaybe<SchemaLanguage>;
};

/** Represents the details of a Pokemon. */
export type SchemaPokemonEntryArgs = {
  language?: InputMaybe<SchemaLanguage>;
  version?: InputMaybe<SchemaGameVersion>;
};

/** All available Pokemon types. */
export const enum SchemaPokemonType {
  bug = "Bug",
  dark = "Dark",
  dragon = "Dragon",
  electric = "Electric",
  fairy = "Fairy",
  fighting = "Fighting",
  fire = "Fire",
  flying = "Flying",
  ghost = "Ghost",
  grass = "Grass",
  ground = "Ground",
  ice = "Ice",
  normal = "Normal",
  poison = "Poison",
  psychic = "Psychic",
  rock = "Rock",
  steel = "Steel",
  water = "Water",
}

/** Represents a Pokemon's typing. */
export type SchemaPokemonTypes = {
  __typename?: "PokemonTypes";
  /** Pokemon's primary type */
  primary: SchemaPokemonType;
  /** Pokemon's secondary type. This type might be null because some Pokemon are mono type. */
  secondary?: Maybe<SchemaPokemonType>;
};

export type SchemaQuery = {
  __typename?: "Query";
  /** Returns the details of a pokemon by the provided id. */
  pokemonById?: Maybe<SchemaPokemon>;
  /** Returns the details of a pokemon by the provided name. */
  pokemonByName?: Maybe<SchemaPokemon>;
};

export type SchemaQueryPokemonByIdArgs = {
  id: Scalars["ID"];
};

export type SchemaQueryPokemonByNameArgs = {
  name: Scalars["String"];
};
