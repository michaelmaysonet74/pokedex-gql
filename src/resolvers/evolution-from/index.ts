import { gql } from "apollo-server";
import { EvolutionFrom } from "../../data-sources/poke-api/models/pokemon-species";
import { getId } from "./id";
import { getName } from "./name";

export interface MetaEvolutionFrom {
  _meta?: {
    evolutionFromSpecies?: EvolutionFrom;
  };
}

const EvolutionFromSchema = gql`
  """
  Represents a Pokemon Evolution
  """
  interface Evolution {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID

    "Pokemon's name"
    name: String
  }

  """
  Represents a Pokemon which it evolves from.
  """
  type EvolutionFrom implements Evolution {
    "Pokemon's id, can match pokedex number (not always)."
    id: ID

    "Pokemon's name"
    name: String
  }
`;

const EvolutionFromResolver = {
  id: getId,
  name: getName,
};

export default {
  resolver: EvolutionFromResolver,
  schema: EvolutionFromSchema,
};
