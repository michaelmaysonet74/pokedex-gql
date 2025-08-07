import { MetaEvolutionTo } from "..";
import { ResolverContext } from "../../../context/types";

export const getId = (
  parent: MetaEvolutionTo,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { url } = parent?._meta?.evolution?.species ?? {};

  const {
    helpers: { idsFromUrl },
  } = ctx;

  return url ? idsFromUrl({ url })?.[0] : null;
};
