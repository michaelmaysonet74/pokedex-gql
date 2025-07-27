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
    dataSources: { pokeAPI, pokemonTypeChart },
    helpers: { constructedKebab },
  } = ctx;

  const pokemonDetails = await pokeAPI.getPokemonByName(
    constructedKebab({ str: name })
  );

  if (!pokemonDetails?.id) {
    return null;
  }

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
    id: pokemonDetails?.id.toString(),
    _meta: {
      pokemonDetails,
      typeChart: pokemonTypeChartRes?.type_chart,
    },
  } as SchemaPokemon;
};
