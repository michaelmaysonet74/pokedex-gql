import { RESTDataSource } from "apollo-datasource-rest";
import DataLoader from "dataloader";
import { Pokemon } from "./models/pokemon";
import { PokemonSpecies } from "./models/pokemon-species";

export class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2";
  }

  async getPokemonById(id: string): Promise<Pokemon> {
    return this.get(`/pokemon/${id}`);
  }

  private async _getPokemonSpeciesById(id: string): Promise<PokemonSpecies> {
    return this.get(`/pokemon-species/${id}`);
  }

  private pokemonSpeciesByIdLoader = new DataLoader(
    async (ids: readonly string[]): Promise<PokemonSpecies[]> => {
      const pokemonSpecies = await this._getPokemonSpeciesById(ids[0]);
      return ids.map(() => pokemonSpecies);
    }
  );

  async getPokemonSpeciesById(id: string): Promise<PokemonSpecies | undefined> {
    return this.pokemonSpeciesByIdLoader.load(id);
  }
}
