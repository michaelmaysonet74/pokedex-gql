interface GetFormattedHeightParams {
  heightInFeet: number;
}

export const getFormattedHeight = ({
  heightInFeet,
}: GetFormattedHeightParams): string => {
  const [feet = "0", inches = "0"] = heightInFeet?.toString()?.split(".") ?? [];
  return `${feet}' ${parseInt(inches) < 10 ? `0${inches}` : inches}"`;
};
