import { MetaDimensions } from "..";

export const getHeight = (parent: MetaDimensions): string | null =>
  parent?._meta?.height?.toString() ?? null;
