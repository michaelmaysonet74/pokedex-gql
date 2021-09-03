import { MetaMeasurement } from "..";
import { getFormattedHeight, getHeightInFeet } from "../../../helpers";

export const getHeight = (parent: MetaMeasurement): string | null => {
  const { height } = parent?._meta ?? {};
  return height
    ? getFormattedHeight({
        heightInFeet: getHeightInFeet({ heightInDecimeters: height }),
      })
    : null;
};
