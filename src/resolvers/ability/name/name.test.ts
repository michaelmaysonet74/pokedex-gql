import { getName } from ".";
import { MetaAbility } from "..";
import { fakeAbility } from "../../../fixtures/data-sources/pokemon";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaAbility = {
  _meta: {
    ...fakeAbility,
  },
};

describe("Ability.name", () => {
  it("should return name as a string", () => {
    const result = getName(baseParent, null, baseResolverContext);
    expect(result).toEqual("Torrent");
  });

  it("should return null if _meta.ability is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        ability: undefined,
      },
    };
    const result = getName(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });

  it("should return null if _meta.ability.name is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        ability: {
          name: undefined as unknown as string,
        },
      },
    };
    const result = getName(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });
});
