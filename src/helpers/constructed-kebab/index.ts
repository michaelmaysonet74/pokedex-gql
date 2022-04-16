interface GetConstructedKebabParams {
  str: string;
}

export type ConstructedKebab = (p: GetConstructedKebabParams) => string;

export const getConstructedKebab = ({
  str,
}: GetConstructedKebabParams): string => str.toLowerCase().replace(" ", "-");
