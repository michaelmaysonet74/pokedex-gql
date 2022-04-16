import { gql } from "apollo-server";
import { getFrom } from "./from";

export interface MetaEvolutionChain {
  _meta?: {
    pokemonId?: string;
  };
}

const EvolutionChainSchema = gql`
  """
  Represents a Pokemon Evolution chain.
  """
  type EvolutionChain {
    "Represents a Pokemon which it evolves from in the chain."
    from: EvolutionFrom
  }
`;

const EvolutionChainResolvers = {
  from: getFrom,
};

export default {
  resolver: EvolutionChainResolvers,
  schema: EvolutionChainSchema,
};
