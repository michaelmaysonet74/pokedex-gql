import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getSpecialAttack = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find((_) => _.stat.name == PokemonStatName.SPECIAL_ATTACK)
    ?.base_stat ?? 0;
