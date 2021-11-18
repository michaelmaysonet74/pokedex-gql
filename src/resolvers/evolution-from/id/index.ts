import { MetaEvolutionFrom } from "..";

export const getId = (parent: MetaEvolutionFrom): string | null => {
  const { url } = parent?._meta?.evolutionFromSpecies ?? {};
  return url ?? null;
};
