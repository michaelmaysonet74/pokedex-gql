import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";

export const getImmunities = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): SchemaPokemonType[] => {
  const { immunities = [] } = parent._meta?.effectiveness ?? {};

  const {
    helpers: { title },
  } = ctx;

  return immunities.map((type) => title({ str: type }) as SchemaPokemonType);
};
