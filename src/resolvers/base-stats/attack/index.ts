import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getAttack = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find((_) => _.stat.name == PokemonStatName.ATTACK)
    ?.base_stat ?? 0;
