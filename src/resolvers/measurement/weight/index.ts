import { MetaMeasurement } from "..";

export const getWeight = (parent: MetaMeasurement): string | null =>
  parent?._meta?.weight?.toString() ?? null;
