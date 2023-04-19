export enum PokemonStatName {
  HP = "hp",
  ATTACK = "attack",
  DEFENSE = "defense",
  SPECIAL_ATTACK = "special-attack",
  SPECIAL_DEFENSE = "special-defense",
  SPEED = "speed",
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: PokemonStatName;
  };
}
