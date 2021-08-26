import { MetaPokemon } from "..";
import { SchemaPokemonType } from "../../../schema-types";

export const getTypes = (parent: MetaPokemon): SchemaPokemonType[] => {
  const { types = [] } = parent?._meta?.pokemonDetails ?? {};
  return types.map(({ type }) => type.name as SchemaPokemonType);
};
