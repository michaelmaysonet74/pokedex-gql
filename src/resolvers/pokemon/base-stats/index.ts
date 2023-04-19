import { MetaPokemon } from "..";
import { MetaBaseStats } from "../../base-stats";

export const getBaseStats = (parent: MetaPokemon): Partial<MetaBaseStats> => ({
  _meta: {
    stats: parent?._meta?.pokemonDetails?.stats ?? [],
  },
});
