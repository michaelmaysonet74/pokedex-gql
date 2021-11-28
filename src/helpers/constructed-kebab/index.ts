interface GetConstructedKebabParams {
  str: string;
}

export const getConstructedKebab = ({
  str,
}: GetConstructedKebabParams): string => str.toLowerCase().replace(" ", "-");
