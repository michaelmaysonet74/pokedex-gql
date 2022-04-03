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
  /** Represents a Pokemon which it evolves from in the chain. */
  from?: Maybe<SchemaEvolutionFrom>;
};

/** Represents a Pokemon which it evolves from. */
export type SchemaEvolutionFrom = SchemaEvolution & {
  __typename?: "EvolutionFrom";
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
  shield = "shield",
  silver = "silver",
  sun = "sun",
  sword = "sword",
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

/** Represents the details of a given Pokemon. */
export type SchemaPokemon = {
  __typename?: "Pokemon";
  /** List of abilieties given Pokemon can have. */
  abilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Pokedex flavor text entries for this Pokemon. */
  entry?: Maybe<Scalars["String"]>;
  /** Pokemon's evolution chain */
  evolution?: Maybe<SchemaEvolutionChain>;
  /** Pokemon's id, can match pokedex number (not always). */
  id: Scalars["ID"];
  /** Determines if pokemon only have one type or not. */
  isMonoType?: Maybe<Scalars["Boolean"]>;
  /** Pokemon's measurement */
  measurement?: Maybe<SchemaMeasurement>;
  /** List of moves that given Pokemon can learn. */
  moves?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
  /** URL of Pokemon's sprite */
  sprite?: Maybe<Scalars["String"]>;
  /** List of types given Pokemon has, should not be more than two. */
  types?: Maybe<Array<Maybe<SchemaPokemonType>>>;
};

/** Represents the details of a given Pokemon. */
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
