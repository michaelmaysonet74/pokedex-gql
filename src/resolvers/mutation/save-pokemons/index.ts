import { ResolverContext } from "../../../context/types";
import {
  SchemaMutationSavePokemonsArgs,
  SchemaSavedPokemon,
} from "../../../schema-types";

export const savePokemons = (
  _: null,
  { pokemonsToSave }: SchemaMutationSavePokemonsArgs,
  { dataSources: { store } }: ResolverContext
): SchemaSavedPokemon[] => {
  store.savePokemonRecords(pokemonsToSave);
  return pokemonsToSave.map(({ id }) => ({ id } as SchemaSavedPokemon));
};
