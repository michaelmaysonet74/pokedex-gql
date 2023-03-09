import {
  PokemonDamageRelations,
  PokemonTypeDetails,
} from "../../data-sources/poke-api/models/pokemon-type";

const fakePokemonDamageRelations: PokemonDamageRelations = {
  double_damage_from: [
    {
      name: "grass",
    },
    {
      name: "electric",
    },
  ],
  half_damage_from: [
    {
      name: "steel",
    },
    {
      name: "fire",
    },
    {
      name: "water",
    },
    {
      name: "ice",
    },
  ],
};

export const fakePokemonTypeDetails: PokemonTypeDetails = {
  id: 11,
  damage_relations: fakePokemonDamageRelations,
};
