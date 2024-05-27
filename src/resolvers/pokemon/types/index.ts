import { MetaPokemon } from "..";
import { SchemaPokemonType, SchemaPokemonTypes } from "../../../schema-types";
import { ResolverContext } from "../../../context/types";

export const getTypes = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): SchemaPokemonTypes | null => {
  const { types = [] } = parent?._meta?.pokemonDetails ?? {};

  const {
    helpers: { title },
  } = ctx;

  const typesAsTitle = types.map(
    ({ type }) => title({ str: type.name }) as SchemaPokemonType
  );

  const [primary = null, secondary = null] = typesAsTitle;

  return primary ? { primary, secondary } : null;
};
