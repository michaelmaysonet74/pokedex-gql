import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";

export const getWeaknesses = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): SchemaPokemonType[] => {
  const { weaknesses = [] } = parent._meta?.effectiveness ?? {};

  const {
    helpers: { title },
  } = ctx;

  return weaknesses.map((type) => title({ str: type }) as SchemaPokemonType);
};
