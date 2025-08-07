import { gql } from "apollo-server";
import { getFrom } from "./from";
import { getTo } from "./to";

export interface MetaEvolutionChain {
  _meta?: {
    pokemonId?: string;
    pokemonName?: string;
  };
}

const EvolutionChainSchema = gql`
  """
  Represents a Pokemon Evolution
  """
  interface Evolution {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID

    "Pokemon's name"
    name: String
  }

  """
  Represents a Pokemon Evolution chain.
  """
  type EvolutionChain {
    "Represents the Pokemon it evolves from in the evolution chain."
    from: EvolutionFrom

    "Represents the Pokémon it evolves to in the evolution chain."
    to: [EvolutionTo!]
  }
`;

const EvolutionChainResolvers = {
  from: getFrom,
  to: getTo,
};

export default {
  resolver: EvolutionChainResolvers,
  schema: EvolutionChainSchema,
};
