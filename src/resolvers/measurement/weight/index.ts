import { MetaMeasurement } from "..";
import { getWeightInPounds } from "../../../helpers";

export const getWeight = (parent: MetaMeasurement): string | null => {
  const { weight } = parent?._meta ?? {};
  return weight
    ? `${getWeightInPounds({ weightInHectograms: weight })} lbs.`
    : null;
};
