import {
  GameVersion,
  EntryLanguage,
  FlavorTextEntry,
} from "../../data-sources/poke-api/models/flavor-text-entry";
import {
  PokemonSpecies,
  EvolutionFrom,
  Genera,
  EvolutionChain,
} from "../../data-sources/poke-api/models/pokemon-species";

export const fakeGameVersion: GameVersion = {
  name: "blue",
};

export const fakeGameVersion2: GameVersion = {
  name: "yellow",
};

export const fakeEntryLanguage: EntryLanguage = {
  name: "en",
};

export const fakeEntryLanguage2: EntryLanguage = {
  name: "es",
};

export const fakeFlavorTextEntry: FlavorTextEntry = {
  flavor_text:
    "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  language: fakeEntryLanguage,
  version: fakeGameVersion,
};

export const fakeFlavorTextEntry2: FlavorTextEntry = {
  flavor_text:
    "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
  language: fakeEntryLanguage,
  version: fakeGameVersion2,
};

export const fakeFlavorTextEntry3: FlavorTextEntry = {
  flavor_text:
    "Después del nacimiento, su lomo se hincha y se endurece hasta convertirse en un caparazón. Rocía poderosamente espuma de su boca.",
  language: fakeEntryLanguage2,
  version: fakeGameVersion,
};

export const fakeFlavorTextEntry4: FlavorTextEntry = {
  flavor_text:
    "Lanza agua a su presa desde el agua. Se esconde en su concha cuando se siente en peligro.",
  language: fakeEntryLanguage2,
  version: fakeGameVersion2,
};

export const fakeEvolvesFromSpecies: EvolutionFrom = {
  name: "squirtle",
  url: "http://www.test.com/7",
};

export const fakeEvolutionChain: EvolutionChain = {
  url: "http://www.test.com/3",
};

export const fakeGenera: Genera = {
  genus: "Tiny Turtle Pokémon",
  language: fakeEntryLanguage,
};

export const fakeGenera2: Genera = {
  genus: "Turtle Pokémon",
  language: fakeEntryLanguage,
};

export const fakePokemonSpecies: PokemonSpecies = {
  id: 1,
  flavor_text_entries: [
    fakeFlavorTextEntry,
    fakeFlavorTextEntry2,
    fakeFlavorTextEntry3,
    fakeFlavorTextEntry4,
  ],
  evolution_chain: fakeEvolutionChain,
  genera: [fakeGenera],
};

export const fakePokemonSpecies2: PokemonSpecies = {
  id: 2,
  flavor_text_entries: [],
  evolution_chain: fakeEvolutionChain,
  evolves_from_species: fakeEvolvesFromSpecies,
  genera: [fakeGenera2],
};
