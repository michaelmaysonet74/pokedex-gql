import { RESTDataSource } from "apollo-datasource-rest";
import DataLoader from "dataloader";
import { FlavorTextEntries } from "./models/flavor-text-entry";
import { Pokemon, PokemonId, PokemonName } from "./models/pokemon";
import { AbilityId } from "./models/pokemon-ability";
import { PokemonSpecies, SpeciesId } from "./models/pokemon-species";

export class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2";
  }

  private async getPokemonBy(filter: string): Promise<Pokemon> {
    return this.get(`/pokemon/${filter}`);
  }

  async getPokemonById(id: PokemonId): Promise<Pokemon> {
    return this.getPokemonBy(id);
  }

  async getPokemonByName(name: PokemonName): Promise<Pokemon> {
    return this.getPokemonBy(name);
  }

  private async _getPokemonSpeciesById(id: SpeciesId): Promise<PokemonSpecies> {
    return this.get(`/pokemon-species/${id}`);
  }

  private pokemonSpeciesByIdLoader = new DataLoader(
    async (ids: readonly SpeciesId[]): Promise<PokemonSpecies[]> => {
      const pokemonSpecies = await this._getPokemonSpeciesById(ids[0]);
      return ids.map(() => pokemonSpecies);
    }
  );

  async getPokemonSpeciesById(
    id: SpeciesId
  ): Promise<PokemonSpecies | undefined> {
    return this.pokemonSpeciesByIdLoader.load(id);
  }

  private async _getPokemonAbilityTextEntryById(
    id: AbilityId
  ): Promise<FlavorTextEntries> {
    return this.get(`/ability/${id}`);
  }

  private pokemonAbilityByIdLoader = new DataLoader(
    async (
      ids: readonly AbilityId[]
    ): Promise<(FlavorTextEntries | undefined)[]> => {
      const entries = await Promise.all(
        ids.map((id) => this._getPokemonAbilityTextEntryById(id))
      );
      return ids.map((id) => entries.find((entry) => entry.id === id));
    }
  );

  async getPokemonAbilityTextEntryById(
    id: AbilityId
  ): Promise<FlavorTextEntries | undefined> {
    return this.pokemonAbilityByIdLoader.load(id);
  }
}
