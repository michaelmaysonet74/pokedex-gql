interface GetIdFromUrlParams {
  url: string;
}

const isNumeric = (str: string): boolean => {
  const numeric = new RegExp("^[0-9]+$");
  return !!str.match(numeric)?.length;
};

export const getIdFromUrl = ({ url }: GetIdFromUrlParams): string | null =>
  url.split("/").filter(isNumeric)[0] ?? null;
