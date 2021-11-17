import { EvolutionDetails } from "../../data-sources/poke-api/models/pokemon-evolution";
import { getName } from "./name";

export interface MetaEvolution {
  _meta?: {
    evolutionDetails?: EvolutionDetails;
  };
}

const EvolutionResolver = {
  name: getName,
};

export default EvolutionResolver;
