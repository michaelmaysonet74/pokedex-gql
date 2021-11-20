interface GetIdFromUrlParams {
  url: string;
}

const isNumeric = (str: string): boolean => !!str.match(/^[0-9]+$/)?.length;

export const getIdFromUrl = ({ url }: GetIdFromUrlParams): string | null =>
  url.split("/").filter(isNumeric)[0] ?? null;
