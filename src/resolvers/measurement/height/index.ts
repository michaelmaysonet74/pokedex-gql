import { MetaMeasurement } from "..";
import { ResolverContext } from "../../../context/types";

export const getHeight = (
  parent: MetaMeasurement,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { height } = parent?._meta ?? {};

  const {
    helpers: { formattedHeight, heightInFeetInches },
  } = ctx;

  return height
    ? formattedHeight({
        heightInFeetInches: heightInFeetInches({ heightInDecimeters: height }),
      })
    : null;
};
