export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
  /** Pokemon's id, can match pokedex number (not always). */
  id: Scalars["ID"];
  /** Pokemon's name */
  name?: Maybe<Scalars["String"]>;
  /** List of moves that given Pokemon can learn. */
  moves?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of types given Pokemon has, should not be more than two. */
  types?: Maybe<Array<Maybe<SchemaPokemonType>>>;
  /** List of abilieties given Pokemon can have. */
  abilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Pokemon's measurement */
  measurement?: Maybe<SchemaMeasurement>;
  /** Determines if pokemon only have one type or not. */
  isMonoType?: Maybe<Scalars["Boolean"]>;
  /** Pokedex flavor text entries for this Pokemon. */
  entry?: Maybe<Scalars["String"]>;
};

/** Represents the details of a given Pokemon. */
export type SchemaPokemonEntryArgs = {
  language?: Maybe<SchemaLanguage>;
  version?: Maybe<SchemaGameVersion>;
};

/** All available Pokemon types. */
export const enum SchemaPokemonType {
  bug = "bug",
  dark = "dark",
  dragon = "dragon",
  electric = "electric",
  fairy = "fairy",
  fighting = "fighting",
  fire = "fire",
  flying = "flying",
  ghost = "ghost",
  grass = "grass",
  ground = "ground",
  ice = "ice",
  normal = "normal",
  poison = "poison",
  psychic = "psychic",
  rock = "rock",
  steel = "steel",
  water = "water",
}

export type SchemaQuery = {
  __typename?: "Query";
  /** Returns the details of a pokemon by the provided id. */
  pokemonById?: Maybe<SchemaPokemon>;
};

export type SchemaQueryPokemonByIdArgs = {
  id: Scalars["ID"];
};
