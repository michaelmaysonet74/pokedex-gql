export interface Evolution {
  evolves_to: Evolution[];
  species: {
    name?: string | null;
    url?: string | null;
  };
}

export interface EvolutionChain {
  chain: Evolution;
}
