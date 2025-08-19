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
    helpers: { constructedKebab, specialNameMapper },
  } = ctx;

  const pokemonDetails = await pokeAPI.getPokemonByName(
    specialNameMapper({ name, inverse: true }) ??
      constructedKebab({ str: name })
  );

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
