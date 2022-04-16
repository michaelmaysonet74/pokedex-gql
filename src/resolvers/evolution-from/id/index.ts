import { MetaEvolutionFrom } from "..";
import { ResolverContext } from "../../../context/types";

export const getId = (
  parent: MetaEvolutionFrom,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { url } = parent?._meta?.evolutionFromSpecies ?? {};

  const {
    helpers: { idsFromUrl },
  } = ctx;

  return url ? idsFromUrl({ url })?.[0] : null;
};
