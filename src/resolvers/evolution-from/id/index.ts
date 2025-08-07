import { MetaEvolutionFrom } from "..";
import { ResolverContext } from "../../../context/types";

export const getId = (
  parent: MetaEvolutionFrom,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { url } = parent?._meta?.evolutionFromSpecies ?? {};

  if (!url) return null;

  const {
    helpers: { idsFromUrl },
  } = ctx;

  const [id] = idsFromUrl({ url });
  return id ?? null;
};
