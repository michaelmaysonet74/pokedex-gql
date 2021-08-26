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

export type SchemaDeletedPokemon = {
  __typename?: "DeletedPokemon";
  id: Scalars["ID"];
};

export type SchemaMutation = {
  __typename?: "Mutation";
  savePokemons?: Maybe<Array<Maybe<SchemaSavedPokemon>>>;
  deletePokemons?: Maybe<Array<Maybe<SchemaDeletedPokemon>>>;
};

export type SchemaMutationSavePokemonsArgs = {
  pokemonsToSave: Array<SchemaPokemonToSave>;
};

export type SchemaMutationDeletePokemonsArgs = {
  pokemonsToDelete: Array<SchemaPokemonToDelete>;
};

export type SchemaPokemon = {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  moves?: Maybe<Array<Maybe<Scalars["String"]>>>;
  types?: Maybe<Array<Maybe<SchemaPokemonType>>>;
  abilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  dimensions?: Maybe<SchemaPokemonDimension>;
};

export type SchemaPokemonDimension = {
  __typename?: "PokemonDimension";
  height?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["String"]>;
};

export type SchemaPokemonToDelete = {
  id: Scalars["ID"];
};

export type SchemaPokemonToSave = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

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
  pokemonById?: Maybe<SchemaPokemon>;
  savedPokemons?: Maybe<Array<Maybe<SchemaSavedPokemon>>>;
};

export type SchemaQueryPokemonByIdArgs = {
  id: Scalars["ID"];
};

export type SchemaSavedPokemon = {
  __typename?: "SavedPokemon";
  id: Scalars["ID"];
  pokemonDetails?: Maybe<SchemaPokemon>;
};
