import { getFrom } from "./from";

export interface MetaEvolutionChain {
  _meta?: {
    pokemonId?: string;
  };
}

const EvolutionChainResolvers = {
  from: getFrom,
};

export default EvolutionChainResolvers;
