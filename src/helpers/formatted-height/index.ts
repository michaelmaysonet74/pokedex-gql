interface FormattedHeightParams {
  heightInFeetInches: [number, number];
}

export type FormattedHeight = (p: FormattedHeightParams) => string;

export const getFormattedHeight = ({
  heightInFeetInches = [0, 0],
}: FormattedHeightParams): string => {
  const [feet, inches] = heightInFeetInches;
  return `${feet}' ${inches < 10 ? `0${inches}` : inches}"`;
};
