import { MetaMeasurement } from "..";

export const getWeight = (parent: MetaMeasurement): string | null => {
  const { weight } = parent?._meta ?? {};
  return weight ? `${weight} lbs.` : null;
};
