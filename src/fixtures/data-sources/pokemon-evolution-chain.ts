import {
  Evolution,
  EvolutionChain,
} from "../../data-sources/poke-api/models/pokemon-evolution-chain";

export const fakeEvolution: Evolution = {
  evolves_to: [
    {
      evolves_to: [
        {
          evolves_to: [],
          species: {
            name: "blastoise",
            url: "http://www.test.com/9",
          },
        },
      ],
      species: {
        name: "wartortle",
        url: "http://www.test.com/8",
      },
    },
  ],
  species: {
    name: "squirtle",
  },
};

export const fakeEvolutionChain: EvolutionChain = {
  chain: fakeEvolution,
};
