interface GetFormattedHeightParams {
  heightInFeet: number;
}

/**
 * @returns `"14 inches"`
 */
export type FormattedHeight = (p: GetFormattedHeightParams) => string;

export const getFormattedHeight = ({
  heightInFeet,
}: GetFormattedHeightParams): string => {
  const [feet = "0", inches = "0"] = heightInFeet?.toString()?.split(".") ?? [];
  return `${feet}' ${parseInt(inches) < 10 ? `0${inches}` : inches}"`;
};
