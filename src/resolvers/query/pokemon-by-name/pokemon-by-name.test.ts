import { ApolloServer, ExpressContext, gql } from "apollo-server-express";
import { createTestServer, baseDataSources } from "../../../helpers/test";
import { fakePokemon2 } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonSpecies2 } from "../../../fixtures/data-sources/pokemon-species";
import { fakePokemonByName } from "../../../fixtures/resolvers/query";

const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      isMonoType
      types
      abilities {
        name
        effect
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
      }
    }
  }
`;

const server: ApolloServer<ExpressContext> = createTestServer();

describe("Query.pokemonByName", () => {
  beforeAll(() => {
    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonByName")
      .mockResolvedValue(fakePokemon2);

    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonSpeciesById")
      .mockResolvedValue(fakePokemonSpecies2);
  });

  it("should return Pokemon by ID", async () => {
    const { data, errors } = await server.executeOperation({
      query: GET_POKEMON_BY_NAME,
      variables: {
        name: "wartortle",
      },
    });

    expect(errors).toBe(undefined);
    expect(data?.pokemonByName).toEqual(fakePokemonByName);
  });
});
