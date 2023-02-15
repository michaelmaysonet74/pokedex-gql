import { MetaPokemon } from "..";
import { SchemaAbility } from "../../../schema-types";

export const getAbilities = (parent: MetaPokemon): SchemaAbility[] => {
  const { abilities = [] } = parent?._meta?.pokemonDetails ?? {};
  return abilities.map(
    ({ ability, is_hidden: isHidden }) =>
      ({ _meta: { ability, isHidden } } as SchemaAbility)
  );
};
