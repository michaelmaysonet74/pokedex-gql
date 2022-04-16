import { ResolverContext } from "../../../context/types";
import {
  SchemaPokemon,
  SchemaQueryPokemonByIdArgs,
} from "../../../schema-types";

export const getPokemonById = async (
  _: null,
  args: SchemaQueryPokemonByIdArgs,
  ctx: ResolverContext
): Promise<SchemaPokemon | null> => {
  const { id } = args;

  const {
    dataSources: { pokeAPI },
  } = ctx;

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
