interface CapitalizedParams {
  str: string;
}

export type Capitalized = (p: CapitalizedParams) => string;

export const getCapitalized = ({ str }: CapitalizedParams): string =>
  str
    ? `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`
    : "";
