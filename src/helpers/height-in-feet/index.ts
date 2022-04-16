interface HeightInFeetParams {
  heightInDecimeters: number;
}

export type HeightInFeet = (p: HeightInFeetParams) => number;

const FOOT = 0.328084;

export const getHeightInFeet = ({
  heightInDecimeters,
}: HeightInFeetParams): number =>
  heightInDecimeters ? Math.round(heightInDecimeters * FOOT * 100) / 100 : 0;
