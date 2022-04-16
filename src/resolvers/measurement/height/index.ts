import { MetaMeasurement } from "..";
import { ResolverContext } from "../../../context/types";

export const getHeight = (
  parent: MetaMeasurement,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { height } = parent?._meta ?? {};

  const {
    helpers: { formattedHeight, heightInFeet },
  } = ctx;

  return height
    ? formattedHeight({
        heightInFeet: heightInFeet({ heightInDecimeters: height }),
      })
    : null;
};
