interface GetCapitalizedParams {
  str: string;
}

export const getCapitalized = ({ str }: GetCapitalizedParams): string =>
  str
    ? `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`
    : "";
