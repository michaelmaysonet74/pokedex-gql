import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";

export const getAbilities = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): string[] => {
  const { abilities = [] } = parent?._meta?.pokemonDetails ?? {};

  const {
    helpers: { title },
  } = ctx;

  return abilities.map(({ ability }) => title({ str: ability.name }));
};
