import { ApolloServer, ExpressContext, gql } from "apollo-server-express";
import { createTestServer, baseDataSources } from "../../../helpers/test";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonSpecies } from "../../../fixtures/data-sources/pokemon-species";
import { fakePokemonById } from "../../../fixtures/resolvers/query";
import { fakePokemonTypeChartResponse } from "../../../fixtures/data-sources/pokemon-type-chart";
import { fakeEvolutionChain } from "../../../fixtures/data-sources/pokemon-evolution-chain";

const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      name
      category
      types
      abilities {
        name
        effect
        isHidden
      }
      moves
      measurement {
        height
        weight
      }
      entry
      sprite
      evolution {
        from {
          id
          name
        }
        to {
          id
          name
        }
      }
      immunities
      resistances
      weaknesses
      baseStats {
        hp
        attack
        defense
        specialAttack
        specialDefense
        speed
        total
      }
    }
  }
`;

const server: ApolloServer<ExpressContext> = createTestServer();

describe("Query.pokemonById", () => {
  beforeAll(() => {
    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonById")
      .mockResolvedValue(fakePokemon);

    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonSpeciesById")
      .mockResolvedValue(fakePokemonSpecies);

    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonEvolutionChain")
      .mockResolvedValue(fakeEvolutionChain);

    jest
      .spyOn(baseDataSources.pokemonTypeChart, "getPokemonTypeChart")
      .mockResolvedValue(fakePokemonTypeChartResponse);
  });

  it("should return Pokemon by ID", async () => {
    const { data, errors } = await server.executeOperation({
      query: GET_POKEMON_BY_ID,
      variables: {
        id: "7",
      },
    });

    expect(errors).toBe(undefined);
    expect(data?.pokemonById).toEqual(fakePokemonById);
  });
});
