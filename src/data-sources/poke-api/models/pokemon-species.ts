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

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
}
