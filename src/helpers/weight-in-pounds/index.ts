interface WeightInPoundsParams {
  weightInHectograms: number;
}

export type WeightInPounds = (p: WeightInPoundsParams) => number;

const HECTOGRAM_TO_POUND = 0.220462;

export const getWeightInPounds = ({
  weightInHectograms,
}: WeightInPoundsParams): number =>
  weightInHectograms
    ? Number((weightInHectograms * HECTOGRAM_TO_POUND).toFixed(1))
    : 0;
