import { MetaEvolution } from "..";

export const getName = async (
  parent: MetaEvolution
): Promise<string | null> => {
  const { evolutionDetails } = parent?._meta ?? {};
  return evolutionDetails?.species?.name ?? null;
};
