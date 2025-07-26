import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";
import { Request } from "../../../data-sources/pokemon-type-chart/models/request";

export const getWeaknesses = async (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): Promise<SchemaPokemonType[]> => {
  const { name, types = [] } = parent._meta?.pokemonDetails ?? {};

  if (!name || types.length === 0) {
    return [];
  }

  const {
    dataSources: { pokemonTypeChart },
    helpers: { title },
  } = ctx;

  const request: Request = {
    pokemon: {
      name,
      types: types.map(({ type }) => type.name),
    },
  };

  const response = await pokemonTypeChart.getPokemonTypeChart(request);

  return (
    response?.type_chart.weaknesses.map(
      (type) => title({ str: type }) as SchemaPokemonType
    ) ?? []
  );
};
