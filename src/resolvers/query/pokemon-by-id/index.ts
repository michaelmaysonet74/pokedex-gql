import { ResolverContext } from "../../../context/types";
import {
  SchemaPokemon,
  SchemaQueryPokemonByIdArgs,
} from "../../../schema-types";

export const getPokemonById = async (
  _: null,
  { id }: SchemaQueryPokemonByIdArgs,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<SchemaPokemon | null> => {
  const pokemonDetails = await pokeAPI.getPokemonById(id);

  return pokemonDetails?.id
    ? ({
        id: pokemonDetails?.id.toString(),
        _meta: {
          pokemonDetails,
        },
      } as SchemaPokemon)
    : null;
};
