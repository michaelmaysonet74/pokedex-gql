interface ConstructedKebabParams {
  str: string;
}

export type ConstructedKebab = (p: ConstructedKebabParams) => string;

export const getConstructedKebab = ({ str }: ConstructedKebabParams): string =>
  str.toLowerCase().replace(" ", "-");
