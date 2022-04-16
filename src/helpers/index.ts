export * from "./capitalized";
export * from "./constructed-kebab";
export * from "./deconstructed-kebab";
export * from "./formatted-height";
export * from "./height-in-feet";
export * from "./title";
export * from "./weight-in-pounds";

import { Capitalized, getCapitalized } from "./capitalized";
import { ConstructedKebab, getConstructedKebab } from "./constructed-kebab";
import {
  DeconstructedKebab,
  getDeconstructedKebab,
} from "./deconstructed-kebab";
import { FormattedHeight, getFormattedHeight } from "./formatted-height";
import { getHeightInFeet, HeightInFeet } from "./height-in-feet";
import { getIdsFromUrl, IdsFromUrl } from "./ids-from-url";
import { getTitle, Title } from "./title";
import { getWeightInPounds, WeightInPounds } from "./weight-in-pounds";

export interface Helpers {
  capitalized: Capitalized;
  constructedKebab: ConstructedKebab;
  deconstructedKebab: DeconstructedKebab;
  formattedHeight: FormattedHeight;
  heightInFeet: HeightInFeet;
  idsFromUrl: IdsFromUrl;
  title: Title;
  weightInPounds: WeightInPounds;
}

export default Object.freeze({
  capitalized: getCapitalized,
  constructedKebab: getConstructedKebab,
  deconstructedKebab: getDeconstructedKebab,
  formattedHeight: getFormattedHeight,
  heightInFeet: getHeightInFeet,
  idsFromUrl: getIdsFromUrl,
  title: getTitle,
  weightInPounds: getWeightInPounds,
}) as Helpers;
