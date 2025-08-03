import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.pokemonDetails ?? {};

  if (!name) return null;

  const {
    helpers: { title, specialNameMapper },
  } = ctx;

  return specialNameMapper({ name }) ?? title({ str: name });
};
