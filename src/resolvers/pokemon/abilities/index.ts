import { MetaPokemon } from "..";
import { SchemaAbility } from "../../../schema-types";

export const getAbilities = (parent: MetaPokemon): SchemaAbility[] => {
  const { abilities = [] } = parent?._meta?.pokemonDetails ?? {};
  return abilities.map(
    ({ ability }) => ({ _meta: { ability } } as SchemaAbility)
  );
};
