import { RESTDataSource } from "apollo-datasource-rest";
import DataLoader from "dataloader";
import { Pokemon } from "./models/pokemon";

export class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2";
  }

  private async getMultiplePokemonById(ids: string[]): Promise<Pokemon[]> {
    return Promise.all(ids.map((id) => this.get(`/pokemon/${id}`)));
  }

  private multiplePokemonByIdLoader = new DataLoader(
    async (ids: readonly string[]) => {
      const pokemons = await this.getMultiplePokemonById(ids.map((_) => _));

      return ids.map((id: string) =>
        pokemons.find((pokemon: Pokemon) => pokemon.id.toString() === id)
      );
    }
  );

  async getPokemonById(id: string): Promise<Pokemon | undefined> {
    return this.multiplePokemonByIdLoader.load(id);
  }
}
