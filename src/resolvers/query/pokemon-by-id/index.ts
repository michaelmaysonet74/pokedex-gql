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
    dataSources: { pokeAPI, pokemonTypeChart },
  } = ctx;

  const pokemonDetails = await pokeAPI.getPokemonById(id);

  if (!pokemonDetails) return null;

  const request = {
    pokemon: {
      name: pokemonDetails.name,
      types: pokemonDetails.types.map(({ type }) => type.name),
    },
  };

  const response = await pokemonTypeChart.getPokemonEffectiveness(request);

  return {
    id: pokemonDetails.id.toString(),
    _meta: {
      pokemonDetails,
      effectiveness: response?.effectiveness,
    },
  } as SchemaPokemon;
};
