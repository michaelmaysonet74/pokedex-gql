import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";

export const getResistances = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): SchemaPokemonType[] => {
  const { resistances = [] } = parent._meta?.typeChart ?? {};

  const {
    helpers: { title },
  } = ctx;

  return resistances.map((type) => title({ str: type }) as SchemaPokemonType);
};
