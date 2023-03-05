import { MetaAbility } from "..";

export const getIsHidden = (parent: MetaAbility): boolean => {
  const { isHidden = false } = parent?._meta ?? {};
  return isHidden;
};
