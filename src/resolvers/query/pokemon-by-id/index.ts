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

  const pokemonTypeChartReq = {
    pokemon: {
      name: pokemonDetails.name,
      types: pokemonDetails.types.map(({ type }) => type.name),
    },
  };

  const pokemonTypeChartRes = await pokemonTypeChart.getPokemonTypeChart(
    pokemonTypeChartReq
  );

  return {
    id: pokemonDetails.id.toString(),
    _meta: {
      pokemonDetails,
      typeChart: pokemonTypeChartRes?.type_chart,
    },
  } as SchemaPokemon;
};
