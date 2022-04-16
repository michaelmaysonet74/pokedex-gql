interface FormattedHeightParams {
  heightInFeet: number;
}

/**
 * @returns `"14 inches"`
 */
export type FormattedHeight = (p: FormattedHeightParams) => string;

export const getFormattedHeight = ({
  heightInFeet,
}: FormattedHeightParams): string => {
  const [feet = "0", inches = "0"] = heightInFeet?.toString()?.split(".") ?? [];
  return `${feet}' ${parseInt(inches) < 10 ? `0${inches}` : inches}"`;
};
