import { gql } from "apollo-server";
import { getPokemonById } from "./pokemon-by-id";
import { getPokemonByName } from "./pokemon-by-name";

export const QuerySchema = gql`
  type Query {
    "Returns the details of a pokemon by the provided id."
    pokemonById(id: ID!): Pokemon

    "Returns the details of a pokemon by the provided name."
    pokemonByName(name: String!): Pokemon
  }
`;

const QueryResolver = {
  pokemonById: getPokemonById,
  pokemonByName: getPokemonByName,
};

export default {
  resolver: QueryResolver,
  schema: QuerySchema,
};
