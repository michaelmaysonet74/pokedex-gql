import { getIsHidden } from ".";
import { MetaAbility } from "..";

const baseParent: MetaAbility = {
  _meta: {
    isHidden: true,
  },
};

describe("Ability.isHidden", () => {
  it("should return true if parent._meta.isHidden is true", () => {
    const result = getIsHidden(baseParent);
    expect(result).toEqual(true);
  });

  it("should return false of parent._meta.isHidden is true", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        isHidden: false,
      },
    };
    const result = getIsHidden(updatedParent);
    expect(result).toEqual(false);
  });

  it("should return false if parent._meta is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: undefined,
    };
    const result = getIsHidden(updatedParent);
    expect(result).toEqual(false);
  });

  it("should return false if parent._meta.isHidden is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        isHidden: undefined,
      },
    };
    const result = getIsHidden(updatedParent);
    expect(result).toEqual(false);
  });
});
