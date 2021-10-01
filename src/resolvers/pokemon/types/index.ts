import { MetaPokemon } from "..";
import { SchemaPokemonType } from "../../../schema-types";
import { getTitle } from "../../../helpers";

export const getTypes = (parent: MetaPokemon): SchemaPokemonType[] => {
  const { types = [] } = parent?._meta?.pokemonDetails ?? {};
  return types.map(
    ({ type }) => getTitle({ str: type.name }) as SchemaPokemonType
  );
};
