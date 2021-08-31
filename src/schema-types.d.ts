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

/** Represents a successful deletion of a pokemon record. */
export type SchemaDeletedPokemon = SchemaPokemonRecord & {
  __typename?: "DeletedPokemon";
  /** Pokemon id of deleted record. */
  id: Scalars["ID"];
};

/** Represents the measurements of a given entity. */
export type SchemaMeasurement = {
  __typename?: "Measurement";
  /** Entity's height */
  height?: Maybe<Scalars["String"]>;
  /** Entity's weight */
  weight?: Maybe<Scalars["String"]>;
};

export type SchemaMutation = {
  __typename?: "Mutation";
  /** Save one or more pokemon records. */
  savePokemons?: Maybe<Array<Maybe<SchemaSavedPokemon>>>;
  /** Delete one or more pokemon records. */
  deletePokemons?: Maybe<Array<Maybe<SchemaDeletedPokemon>>>;
};

export type SchemaMutationSavePokemonsArgs = {
  pokemonsToSave: Array<SchemaPokemonToSave>;
};

export type SchemaMutationDeletePokemonsArgs = {
  pokemonsToDelete: Array<SchemaPokemonToDelete>;
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
  /** Pokemon's measurements */
  measurements?: Maybe<SchemaMeasurement>;
  /** Determines if pokemon only have one type or not. */
  isMonoType?: Maybe<Scalars["Boolean"]>;
};

/** Represents a Pokemon Record. */
export type SchemaPokemonRecord = {
  /** ID of Pokemon Record. */
  id: Scalars["ID"];
};

/** Represents a pokemon record to be deleted. */
export type SchemaPokemonToDelete = {
  /** Pokemon id of record that is meant to be deleted. */
  id: Scalars["ID"];
};

/** Represents a pokemon record to be saved. */
export type SchemaPokemonToSave = {
  /** Pokemon id of record that is meant to be saved. */
  id: Scalars["ID"];
  /** Pokemon name */
  name: Scalars["String"];
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
  /** Returns all the saved pokemon records with their details. */
  savedPokemons?: Maybe<Array<Maybe<SchemaSavedPokemon>>>;
};

export type SchemaQueryPokemonByIdArgs = {
  id: Scalars["ID"];
};

/** Represents a saved pokemon record with its details. */
export type SchemaSavedPokemon = SchemaPokemonRecord & {
  __typename?: "SavedPokemon";
  /** Saved Pokemon id. */
  id: Scalars["ID"];
  /** Saved Pokemon details. */
  pokemonDetails?: Maybe<SchemaPokemon>;
};
