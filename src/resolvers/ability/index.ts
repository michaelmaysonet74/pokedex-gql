import { SchemaAbility } from "../../schema-types";
import { gql } from "apollo-server";
import { getName } from "./name";
import { getEffect } from "./effect";
import { getIsHidden } from "./is-hidden";

export interface MetaAbility extends SchemaAbility {
  _meta?: {
    ability?: {
      name: string;
      url?: string;
    };
    isHidden?: boolean;
  };
}

const AbilitySchema = gql`
  type Ability {
    name: String
    effect(language: Language): String
    isHidden: Boolean
  }
`;

const AbilityResolver = {
  name: getName,
  effect: getEffect,
  isHidden: getIsHidden,
};

export default {
  resolver: AbilityResolver,
  schema: AbilitySchema,
};
