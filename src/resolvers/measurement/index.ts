import { SchemaMeasurement } from "../../schema-types";
import { getHeight } from "./height";
import { getWeight } from "./weight";

export interface MetaMeasurement extends SchemaMeasurement {
  _meta?: {
    height?: number;
    weight?: number;
  };
}

const MeasurmentResolver = {
  height: getHeight,
  weight: getWeight,
};

export default MeasurmentResolver;
