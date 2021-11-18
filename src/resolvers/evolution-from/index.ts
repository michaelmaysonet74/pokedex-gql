import { EvolutionFrom } from "../../data-sources/poke-api/models/pokemon-species";
import { getId } from "./id";
import { getName } from "./name";

export interface MetaEvolutionFrom {
  _meta?: {
    evolutionFromSpecies?: EvolutionFrom;
  };
}

const EvolutionFromResolver = {
  id: getId,
  name: getName,
};

export default EvolutionFromResolver;
