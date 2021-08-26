import { ResolverContext } from "../../../context/types";
import { SchemaSavedPokemon } from "../../../schema-types";

export const getSavedPokemons = (
  _: null,
  args: null,
  { dataSources: { store } }: ResolverContext
): SchemaSavedPokemon[] => store.getPokemonRecords().map(({ id }) => ({ id }));
