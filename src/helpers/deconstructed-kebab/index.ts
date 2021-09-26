interface GetDeconstructedKebabParams {
  kebab: string;
}

export const getDeconstructedKebab = ({
  kebab,
}: GetDeconstructedKebabParams): string[] => kebab.split("-");
