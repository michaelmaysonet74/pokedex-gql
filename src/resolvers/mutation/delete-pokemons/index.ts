import { ResolverContext } from "../../../context/types";
import {
  SchemaDeletedPokemon,
  SchemaMutationDeletePokemonsArgs,
} from "../../../schema-types";

export const deletePokemons = (
  _: null,
  { pokemonsToDelete }: SchemaMutationDeletePokemonsArgs,
  { dataSources: { store } }: ResolverContext
): SchemaDeletedPokemon[] => {
  store.deletePokemonRecords(pokemonsToDelete.map(({ id }) => id));
  return pokemonsToDelete.map((_) => ({
    __typename: "DeletedPokemon",
    id: _.id,
  }));
};
