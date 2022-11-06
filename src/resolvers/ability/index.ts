import { SchemaAbility } from "../../schema-types";
import { gql } from "apollo-server";
import { PokemonAbility } from "../../data-sources/poke-api/models/pokemon-ability";

export interface MetaAbility extends SchemaAbility {
  _meta: {
    ability: PokemonAbility;
  };
}

const AbilitySchema = gql`
  type Ability {
    name: String
    description: String
  }
`;

const AbilityResolver = {
  name: (): string => "",
  description: (): string => "",
};

export default {
  resolver: AbilityResolver,
  schema: AbilitySchema,
};
