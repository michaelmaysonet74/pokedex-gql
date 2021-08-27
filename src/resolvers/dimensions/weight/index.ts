import { MetaDimensions } from "..";

export const getWeight = (parent: MetaDimensions): string | null =>
  parent?._meta?.weight?.toString() ?? null;
