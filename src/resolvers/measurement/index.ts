import { gql } from "apollo-server";
import { SchemaMeasurement } from "../../schema-types";
import { getHeight } from "./height";
import { getWeight } from "./weight";

export interface MetaMeasurement extends SchemaMeasurement {
  _meta?: {
    height?: number;
    weight?: number;
  };
}

const MeasurmentSchema = gql`
  """
  Represents the measurement of a given entity.
  """
  type Measurement {
    "Entity's height"
    height: String

    "Entity's weight"
    weight: String
  }
`;

const MeasurmentResolver = {
  height: getHeight,
  weight: getWeight,
};

export default {
  resolver: MeasurmentResolver,
  schema: MeasurmentSchema,
};
