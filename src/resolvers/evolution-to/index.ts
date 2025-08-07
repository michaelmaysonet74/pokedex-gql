import { gql } from "apollo-server";
import { Evolution } from "../../data-sources/poke-api/models/pokemon-evolution-chain";
import { getId } from "./id";
import { getName } from "./name";

export interface MetaEvolutionTo {
  _meta?: {
    evolution?: Evolution;
  };
}

const EvolutionToSchema = gql`
  """
  Represents a Pokemon which it evolves to.
  """
  type EvolutionTo implements Evolution {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID

    "Pokemon's name"
    name: String
  }
`;

const EvolutionToResolver = {
  id: getId,
  name: getName,
};

export default {
  resolver: EvolutionToResolver,
  schema: EvolutionToSchema,
};
