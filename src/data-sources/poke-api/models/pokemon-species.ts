export interface GameVersion {
  name: string;
}

export interface EntryLanguage {
  name: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: EntryLanguage;
  version: GameVersion;
}

export interface EvolutionFrom {
  name?: string | null;
  url?: string | null;
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  evolves_from_species?: EvolutionFrom;
}
