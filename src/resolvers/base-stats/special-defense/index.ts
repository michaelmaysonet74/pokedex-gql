import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getSpecialDefense = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find(
    (_) => _.stat.name == PokemonStatName.SPECIAL_DEFENSE
  )?.base_stat ?? 0;
