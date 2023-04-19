import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getDefense = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find((_) => _.stat.name == PokemonStatName.DEFENSE)
    ?.base_stat ?? 0;
