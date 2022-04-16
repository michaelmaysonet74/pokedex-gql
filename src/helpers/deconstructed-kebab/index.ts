interface GetDeconstructedKebabParams {
  kebab: string;
}

export type DeconstructedKebab = (p: GetDeconstructedKebabParams) => string[];

export const getDeconstructedKebab = ({
  kebab,
}: GetDeconstructedKebabParams): string[] => kebab.split("-");
