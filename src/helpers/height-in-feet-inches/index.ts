interface HeightInFeetInchesParams {
  heightInDecimeters: number;
}

export type Feet = number;
export type Inches = number;

export type HeightInFeetInches = (
  p: HeightInFeetInchesParams
) => [Feet, Inches];

const INCHES_PER_DECIMETER = 3.93701;
const INCHES_PER_FOOT = 12;

export const getHeightInFeetInches = ({
  heightInDecimeters = 0,
}: HeightInFeetInchesParams): [Feet, Inches] => {
  if (heightInDecimeters <= 0) return [0, 0];

  const totalInches = heightInDecimeters * INCHES_PER_DECIMETER;
  const feet = Math.floor(totalInches / INCHES_PER_FOOT);
  const inches = Math.round(totalInches % INCHES_PER_FOOT);

  // If inches round to 12, increment feet and reset inches to 0
  return inches === 12 ? [feet + 1, 0] : [feet, inches];
};
