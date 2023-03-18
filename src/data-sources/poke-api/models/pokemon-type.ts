export interface DamageFrom {
  name: string;
}

export interface PokemonDamageRelations {
  double_damage_from: DamageFrom[];
  half_damage_from: DamageFrom[];
  no_damage_from: DamageFrom[];
}

export interface PokemonTypeDetails {
  id: number;
  damage_relations: PokemonDamageRelations;
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}
