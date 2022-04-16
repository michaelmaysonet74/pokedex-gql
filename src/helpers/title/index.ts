import { getCapitalized } from "../capitalized";
import { getDeconstructedKebab } from "../deconstructed-kebab";

interface TitleParams {
  str: string;
}

/**
 * @returns `"Water Gun"`
 */
export type Title = (p: TitleParams) => string;

export const getTitle = ({ str }: TitleParams): string =>
  getDeconstructedKebab({ kebab: str })
    .map((_) => getCapitalized({ str: _ }))
    .join(" ");
