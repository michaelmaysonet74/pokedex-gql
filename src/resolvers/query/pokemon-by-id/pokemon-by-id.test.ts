import { ApolloServer, ExpressContext, gql } from "apollo-server-express";
import { createTestServer, baseDataSources } from "../../../helpers/test";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonSpecies } from "../../../fixtures/data-sources/pokemon-species";
import { fakePokemonById } from "../../../fixtures/resolvers/query";

const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      name
      isMonoType
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
