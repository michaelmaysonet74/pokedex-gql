interface WeightInPoundsParams {
  weightInHectograms: number;
}

export type WeightInPounds = (p: WeightInPoundsParams) => number;

const POUND = 4.536;

export const getWeightInPounds = ({
  weightInHectograms,
}: WeightInPoundsParams): number =>
  weightInHectograms ? Math.round((weightInHectograms / POUND) * 10) / 10 : 0;
