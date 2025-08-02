import { MetaEvolutionFrom } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaEvolutionFrom,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.evolutionFromSpecies ?? {};

  if (!name) return null;

  const {
    helpers: { title, specialNameMapper },
  } = ctx;

  return specialNameMapper({ name }) ?? title({ str: name });
};
