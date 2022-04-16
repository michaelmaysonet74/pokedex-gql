import { getDeconstructedKebab, getCapitalized } from "..";

interface GetTitleParams {
  str: string;
}

/**
 * @returns `"Water Gun"`
 */
export type Title = (p: GetTitleParams) => string;

export const getTitle = ({ str }: GetTitleParams): string =>
  getDeconstructedKebab({ kebab: str })
    .map((_) => getCapitalized({ str: _ }))
    .join(" ");
