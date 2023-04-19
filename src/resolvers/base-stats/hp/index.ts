import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getHp = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find((_) => _.stat.name == PokemonStatName.HP)
    ?.base_stat ?? 0;
