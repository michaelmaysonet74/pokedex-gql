import { MetaEvolutionChain } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaEvolutionTo } from "../../../schema-types";

export const getTo = async (
  parent: MetaEvolutionChain,
  _: null,
  ctx: ResolverContext
): Promise<SchemaEvolutionTo[] | null> => {
  const { pokemonId, pokemonName } = parent?._meta ?? {};

  if (!pokemonId || !pokemonName) return null;

  const {
    dataSources: { pokeAPI },
    helpers: { idsFromUrl, specialNameMapper },
  } = ctx;

  const { evolution_chain: evolutionChain } =
    (await pokeAPI.getPokemonSpeciesById(pokemonId)) ?? {};

  if (!evolutionChain?.url) return null;

  const [id] = idsFromUrl({ url: evolutionChain?.url });
  const { chain } = (await pokeAPI.getPokemonEvolutionChain(id)) ?? {};

  if (!chain) return null;

  const normalizedPokemonName = (
    specialNameMapper({ name: pokemonName }) ?? pokemonName
  ).toLocaleLowerCase();

  const evolutions =
    chain.species.name === normalizedPokemonName
      ? chain.evolves_to
      : chain.evolves_to.find(
          ({ species }) => species.name === normalizedPokemonName
        )?.evolves_to;

  return evolutions?.length
    ? evolutions?.map(
        (evolution) =>
          ({
            _meta: {
              evolution,
            },
          } as SchemaEvolutionTo)
      )
    : null;
};
