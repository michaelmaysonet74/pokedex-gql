interface GetHeightInFeet {
  heightInDecimeters: number;
}

const FOOT = 0.328084;

export const getHeightInFeet = ({
  heightInDecimeters,
}: GetHeightInFeet): number =>
  heightInDecimeters ? Math.round(heightInDecimeters * FOOT * 100) / 100 : 0;
