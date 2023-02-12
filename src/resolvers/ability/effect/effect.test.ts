import { getEffect } from ".";
import { MetaAbility } from "..";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import {
  FlavorTextEntries,
  FlavorTextEntry,
} from "../../../data-sources/poke-api/models/flavor-text-entry";
import { PokeAPI } from "../../../data-sources/poke-api";
import helpers from "../../../helpers";
import { fakeAbility } from "../../../fixtures/data-sources/pokemon";
import { SchemaAbilityEffectArgs } from "../../../schema-types";
import {
  fakeEntryLanguage,
  fakeGameVersion,
} from "../../../fixtures/data-sources/pokemon-species";

const fakeAbilityEffect: FlavorTextEntry = {
  flavor_text: "Ups WATER moves in a pinch.",
  language: fakeEntryLanguage,
  version: fakeGameVersion,
};

const fakeAbilityEffects: FlavorTextEntries = {
  id: 1,
  flavor_text_entries: [fakeAbilityEffect],
};

const baseParent: MetaAbility = {
  _meta: {
    ...fakeAbility,
  },
};

const baseArgs: SchemaAbilityEffectArgs = {};

const basePokeAPI = {
  getPokemonAbilityEffectById: jest.fn().mockResolvedValue(fakeAbilityEffects),
} as unknown as PokeAPI;

const baseDataSources: PokemonDataSources = {
  pokeAPI: basePokeAPI,
};

const baseContext = {
  dataSources: baseDataSources,
  helpers,
} as ResolverContext;

describe("Ability.effect", () => {
  it("should return ability effect as a string", async () => {
    const result = await getEffect(baseParent, baseArgs, baseContext);
    expect(result).toEqual(fakeAbilityEffect.flavor_text);
  });

  it("should return null if _meta.ability is undefined", async () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        ability: undefined,
      },
    };
    const result = await getEffect(updatedParent, baseArgs, baseContext);
    expect(result).toBeNull();
  });

  it("should return null if _meta.ability.url is undefined", async () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        ability: {
          name: "",
          url: undefined,
        },
      },
    };
    const result = await getEffect(updatedParent, baseArgs, baseContext);
    expect(result).toBeNull();
  });

  it("should return null if effect by id is not found", async () => {
    jest
      .spyOn(basePokeAPI, "getPokemonAbilityEffectById")
      .mockResolvedValueOnce(undefined);
    const result = await getEffect(baseParent, baseArgs, baseContext);
    expect(result).toBeNull();
  });
});
