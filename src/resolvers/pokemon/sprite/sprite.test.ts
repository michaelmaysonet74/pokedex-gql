import { getSprite } from ".";
import { MetaPokemon } from "..";
import { PokemonSprites } from "../../../data-sources/poke-api/models/pokemon-sprites";
import {
  fakePokemon,
  fakeSprites,
} from "../../../fixtures/data-sources/pokemon";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.sprite", () => {
  it("should return sprite URL", () => {
    const expectedResult = fakePokemon.sprites.front_default;
    const result = getSprite(baseParent);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: undefined,
    };
    const result = getSprite(updatedParent);
    expect(result).toBeNull();
  });

  it("should return null if pokemonDetails is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: undefined,
      },
    };
    const result = getSprite(updatedParent);
    expect(result).toBeNull();
  });

  it("should return null if sprites is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...fakePokemon,
          sprites: undefined as unknown as PokemonSprites,
        },
      },
    };
    const result = getSprite(updatedParent);
    expect(result).toBeNull();
  });

  it("should return null if front_default is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...fakePokemon,
          sprites: {
            ...fakeSprites,
            front_default: undefined as unknown as string,
          },
        },
      },
    };
    const result = getSprite(updatedParent);
    expect(result).toBeNull();
  });
});
