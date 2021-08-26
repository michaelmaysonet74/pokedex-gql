import { SchemaPokemonDimensions } from "../../schema-types";
import { getHeight } from "./height";
import { getWeight } from "./weight";

export interface MetaPokemonDimensions extends SchemaPokemonDimensions {
  _meta?: {
    height?: number;
    weight?: number;
  };
}

const PokemonDimensionsResolver = {
  height: getHeight,
  weight: getWeight,
};

export default PokemonDimensionsResolver;
