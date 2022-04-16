import { MetaEvolutionFrom } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaEvolutionFrom,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.evolutionFromSpecies ?? {};

  const {
    helpers: { title },
  } = ctx;

  return name ? title({ str: name }) : null;
};
