import { getDeconstructedKebab, getCapitalized } from "..";

interface GetTitleParams {
  str: string;
}

export const getTitle = ({ str }: GetTitleParams): string =>
  getDeconstructedKebab({ kebab: str })
    .map((_) => getCapitalized({ str: _ }))
    .join(" ");
