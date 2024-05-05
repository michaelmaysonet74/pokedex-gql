import { MetaBaseStats } from "..";

export const getTotal = (parent: MetaBaseStats): number =>
  parent._meta?.stats.every((_) => _.base_stat !== undefined)
    ? parent._meta?.stats.reduce((p, c) => p + c.base_stat, 0)
    : 0;
