import { SchemaPokemon } from "../../schema-types";
import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { getName } from "./name";
import { getMoves } from "./moves";
import { getTypes } from "./types";
import { getAbilities } from "./abilities";
import { getMeasurement } from "./measurement";
import { getIsMonoType } from "./is-mono-type";
import { getEntry } from "./entry";
import { getSprite } from "./sprite";
import { getEvolution } from "./evolution";

export interface MetaPokemon extends SchemaPokemon {
  _meta?: {
    pokemonDetails?: Pokemon;
  };
}

const PokemonResolver = {
  name: getName,
  moves: getMoves,
  types: getTypes,
  abilities: getAbilities,
  measurement: getMeasurement,
  isMonoType: getIsMonoType,
  entry: getEntry,
  sprite: getSprite,
  evolution: getEvolution,
};

export default PokemonResolver;
