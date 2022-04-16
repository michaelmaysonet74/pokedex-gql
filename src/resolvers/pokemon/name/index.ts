import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.pokemonDetails ?? {};

  const {
    helpers: { title },
  } = ctx;

  return name ? title({ str: name }) : null;
};
