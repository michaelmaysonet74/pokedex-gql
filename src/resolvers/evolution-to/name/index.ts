import { MetaEvolutionTo } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaEvolutionTo,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.evolution?.species ?? {};

  if (!name) return null;

  const {
    helpers: { title, specialNameMapper },
  } = ctx;

  return specialNameMapper({ name }) ?? title({ str: name });
};
