import { RESTDataSource } from "apollo-datasource-rest";
import DataLoader from "dataloader";
import { FlavorTextEntries } from "./models/flavor-text-entry";
import { Pokemon, PokemonId, PokemonName } from "./models/pokemon";
import { AbilityId } from "./models/pokemon-ability";
import { PokemonSpecies, SpeciesId } from "./models/pokemon-species";
import { PokemonTypeDetails } from "./models/pokemon-type";
import { EvolutionChain } from "./models/pokemon-evolution-chain";

export class PokeAPI extends RESTDataSource {
  constructor(baseURL = "https://pokeapi.co/api/v2") {
    super();
    this.baseURL = baseURL;
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

  private async getPokemonAbilityTextEntryById(
    id: AbilityId
  ): Promise<FlavorTextEntries> {
    return this.get(`/ability/${id}`);
  }

  private pokemonAbilityEffectByIdLoader = new DataLoader(
    async (
      ids: readonly AbilityId[]
    ): Promise<(FlavorTextEntries | undefined)[]> => {
      const entries = await Promise.all(
        ids.map((id) => this.getPokemonAbilityTextEntryById(id))
      );
      return ids.map((id) => entries.find((entry) => entry.id === id));
    }
  );

  async getPokemonAbilityEffectById(
    id: AbilityId
  ): Promise<FlavorTextEntries | undefined> {
    return this.pokemonAbilityEffectByIdLoader.load(id);
  }

  private async _getPokemonTypeDetailsById(
    id: string
  ): Promise<PokemonTypeDetails> {
    return this.get(`/type/${id}`);
  }

  private pokemonTypeDetailsByIdLoader = new DataLoader(
    async (
      ids: readonly string[]
    ): Promise<(PokemonTypeDetails | undefined)[]> => {
      const details = await Promise.all(
        ids.map((id) => this._getPokemonTypeDetailsById(id))
      );
      return ids.map((id) => details.find((d) => d.id.toString() === id));
    }
  );

  async getPokemonTypeDetailsById(
    id: string
  ): Promise<PokemonTypeDetails | undefined> {
    return this.pokemonTypeDetailsByIdLoader.load(id);
  }

  async getPokemonEvolutionChain(
    id: string
  ): Promise<EvolutionChain | undefined> {
    return this.get(`/evolution-chain/${id}`);
  }
}
