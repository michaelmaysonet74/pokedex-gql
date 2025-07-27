import { ApolloServer, ExpressContext, gql } from "apollo-server-express";
import { createTestServer, baseDataSources } from "../../../helpers/test";
import { fakePokemon2 } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonSpecies2 } from "../../../fixtures/data-sources/pokemon-species";
import { fakePokemonTypeDetails } from "../../../fixtures/data-sources/pokemon-type-details";
import { fakePokemonByName } from "../../../fixtures/resolvers/query";
import { fakePokemonTypeChartResponse } from "../../../fixtures/data-sources/pokemon-type-chart";

const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      category
      isMonoType
      types {
        primary
        secondary
      }
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

describe("Query.pokemonByName", () => {
  beforeAll(() => {
    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonByName")
      .mockResolvedValue(fakePokemon2);

    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonSpeciesById")
      .mockResolvedValue(fakePokemonSpecies2);

    jest
      .spyOn(baseDataSources.pokeAPI, "getPokemonTypeDetailsById")
      .mockResolvedValue(fakePokemonTypeDetails);

    jest
      .spyOn(baseDataSources.pokemonTypeChart, "getPokemonTypeChart")
      .mockResolvedValue(fakePokemonTypeChartResponse);
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
