interface GetIdFromUrlParams {
  url: string;
}

export type IdsFromUrl = (p: GetIdFromUrlParams) => string[];

const isNumeric = (str: string): boolean => !!str.match(/^[0-9]+$/)?.length;

export const getIdsFromUrl = ({ url }: GetIdFromUrlParams): string[] =>
  url.split("/").filter(isNumeric);
