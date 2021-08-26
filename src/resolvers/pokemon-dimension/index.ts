import { SchemaPokemonDimension } from "../../schema-types";
import { getHeight } from "./height";
import { getWeight } from "./weight";

export interface MetaPokemonDimension extends SchemaPokemonDimension {
  _meta?: {
    height: number;
    weight: number;
  };
}

const PokemonDimensionResolver = {
  height: getHeight,
  weight: getWeight,
};

export default PokemonDimensionResolver;
