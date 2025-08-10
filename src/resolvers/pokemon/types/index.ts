import { MetaPokemon } from "..";
import { SchemaPokemonType } from "../../../schema-types";
import { ResolverContext } from "../../../context/types";

export const getTypes = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): SchemaPokemonType[] => {
  const { types = [] } = parent?._meta?.pokemonDetails ?? {};

  const {
    helpers: { title },
  } = ctx;

  return types.map(
    ({ type }) => title({ str: type.name }) as SchemaPokemonType
  );
};
