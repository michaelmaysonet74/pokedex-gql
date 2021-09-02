import { MetaMeasurement } from "..";

export const getHeight = (parent: MetaMeasurement): string | null => {
  const { height } = parent?._meta ?? {};
  return height ? `${height}"` : null;
};
