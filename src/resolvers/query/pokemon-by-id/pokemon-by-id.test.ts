import { ApolloServer, ExpressContext, gql } from "apollo-server-express";
import { createTestServer } from "../../../helpers/test";

const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      name
      moves
      types
      abilities
      measurement {
        height
        weight
      }
      isMonoType
      entry
      sprite
    }
  }
`;

const server: ApolloServer<ExpressContext> = createTestServer();

describe("Query.pokemonById", () => {
  it("should return Pokemon by ID", () => {});
});
