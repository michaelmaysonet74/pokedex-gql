import { MetaMeasurement } from "..";

export const getHeight = (parent: MetaMeasurement): string | null =>
  parent?._meta?.height?.toString() ?? null;
