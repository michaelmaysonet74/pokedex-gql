interface IdFromUrlParams {
  url: string;
}

export type IdsFromUrl = (p: IdFromUrlParams) => string[];

const isNumeric = (str: string): boolean => !!str.match(/^[0-9]+$/)?.length;

export const getIdsFromUrl = ({ url }: IdFromUrlParams): string[] =>
  url.split("/").filter(isNumeric);
