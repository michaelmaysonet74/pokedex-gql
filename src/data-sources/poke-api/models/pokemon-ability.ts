export type AbilityId = number;

export interface PokemonAbility {
  ability: {
    name: string;
    url?: string;
  };
  is_hidden: boolean;
}
