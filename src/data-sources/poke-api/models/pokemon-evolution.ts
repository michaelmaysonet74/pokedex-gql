export interface EvolutionDetails {
  species: {
    name: string;
  };
}

export interface EvolvesTo {
  evolution_details: EvolutionDetails;
}

export interface Chain {
  evolves_to: EvolvesTo;
}

export interface PokemonEvolution {
  chain: Chain;
}
