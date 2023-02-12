import { MetaAbility } from "..";
import { ResolverContext } from "../../../context/types";

export const getName = (
  parent: MetaAbility,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { name } = parent?._meta?.ability ?? {};

  const {
    helpers: { title },
  } = ctx;

  return name ? title({ str: name }) : null;
};
