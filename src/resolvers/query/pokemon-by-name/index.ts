import { ResolverContext } from "../../../context/types";
import {
  SchemaPokemon,
  SchemaQueryPokemonByNameArgs,
} from "../../../schema-types";

export const getPokemonByName = async (
  _: null,
  args: SchemaQueryPokemonByNameArgs,
  ctx: ResolverContext
): Promise<SchemaPokemon | null> => {
  const { name } = args;

  const {
    dataSources: { pokeAPI },
    helpers: { constructedKebab },
  } = ctx;

  const pokemonDetails = await pokeAPI.getPokemonByName(
    constructedKebab({ str: name })
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
