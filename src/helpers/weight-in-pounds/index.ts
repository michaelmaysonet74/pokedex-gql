interface GetWeightInPoundsParams {
  weightInHectograms: number;
}

export type WeightInPounds = (p: GetWeightInPoundsParams) => number;

const POUND = 4.536;

export const getWeightInPounds = ({
  weightInHectograms,
}: GetWeightInPoundsParams): number =>
  weightInHectograms ? Math.round((weightInHectograms / POUND) * 10) / 10 : 0;
