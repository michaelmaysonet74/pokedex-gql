import { SchemaAbility } from "../../schema-types";
import { gql } from "apollo-server";
import { getName } from "./name";
import { getEffect } from "./effect";

export interface MetaAbility extends SchemaAbility {
  _meta?: {
    ability?: {
      name: string;
      url?: string;
    };
  };
}

const AbilitySchema = gql`
  type Ability {
    name: String
    effect(language: Language): String
  }
`;

const AbilityResolver = {
  name: getName,
  effect: getEffect,
};

export default {
  resolver: AbilityResolver,
  schema: AbilitySchema,
};
