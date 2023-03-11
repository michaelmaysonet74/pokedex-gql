import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";

export const getWeaknesses = async (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): Promise<SchemaPokemonType[]> => {
  const { types = [] } = parent._meta?.pokemonDetails ?? {};

  if (types.length === 0) {
    return [];
  }

  const {
    dataSources: { pokeAPI },
    helpers: { idsFromUrl, title },
  } = ctx;

  const pokemonTypes = types.map(({ type }) => type.name);

  const ids = types
    .map(({ type }) => idsFromUrl({ url: type.url })[0])
    .filter((id) => id !== undefined);

  const detailedTypes = await Promise.all(
    ids.map((id) => pokeAPI.getPokemonTypeDetailsById(id))
  );

  const doubleDamageTypes = detailedTypes.flatMap((details) =>
    details
      ? Array.from(
          new Set(
            details.damage_relations.double_damage_from.map(({ name }) => name)
          )
        )
      : []
  );

  const halfDamageTypes = detailedTypes.flatMap((details) =>
    details
      ? Array.from(
          new Set(
            details.damage_relations.half_damage_from.map(({ name }) => name)
          )
        )
      : []
  );

  const weaknesses = Array.from(
    new Set(
      doubleDamageTypes.filter(
        (type) =>
          !pokemonTypes.includes(type) && !halfDamageTypes.includes(type)
      )
    )
  );

  return weaknesses.map((type) => title({ str: type }) as SchemaPokemonType);
};
