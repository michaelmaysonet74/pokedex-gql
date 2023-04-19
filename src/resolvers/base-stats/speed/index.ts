import { MetaBaseStats } from "..";
import { PokemonStatName } from "../../../data-sources/poke-api/models/pokemon-stat";

export const getSpeed = (parent: MetaBaseStats): number =>
  parent._meta?.stats.find((_) => _.stat.name == PokemonStatName.SPEED)
    ?.base_stat ?? 0;
