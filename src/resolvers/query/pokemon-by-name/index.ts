import { ResolverContext } from "../../../context/types";
import {
  SchemaPokemon,
  SchemaQueryPokemonByNameArgs,
} from "../../../schema-types";
import { getConstructedKebab } from "../../../helpers";

export const getPokemonByName = async (
  _: null,
  { name }: SchemaQueryPokemonByNameArgs,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<SchemaPokemon | null> => {
  const pokemonDetails = await pokeAPI.getPokemonByName(
    getConstructedKebab({ str: name })
  );

  return pokemonDetails?.id
    ? ({
        id: pokemonDetails?.id.toString(),
        _meta: {
          pokemonDetails,
        },
      } as SchemaPokemon)
    : null;
};
