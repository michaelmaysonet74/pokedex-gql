import { MetaMeasurement } from "..";
import { ResolverContext } from "../../../context/types";

export const getHeight = (
  parent: MetaMeasurement,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { height } = parent?._meta ?? {};

  const { formattedHeight, heightInFeet } = ctx.helpers;

  return height
    ? formattedHeight({
        heightInFeet: heightInFeet({ heightInDecimeters: height }),
      })
    : null;
};
