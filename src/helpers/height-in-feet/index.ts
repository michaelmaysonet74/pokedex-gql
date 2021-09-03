interface GetHeightInFeetParams {
  heightInDecimeters: number;
}

const FOOT = 0.328084;

export const getHeightInFeet = ({
  heightInDecimeters,
}: GetHeightInFeetParams): number =>
  heightInDecimeters ? Math.round(heightInDecimeters * FOOT * 100) / 100 : 0;
