interface DeconstructedKebabParams {
  kebab: string;
}

export type DeconstructedKebab = (p: DeconstructedKebabParams) => string[];

export const getDeconstructedKebab = ({
  kebab,
}: DeconstructedKebabParams): string[] => kebab.split("-");
