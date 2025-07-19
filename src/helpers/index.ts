import { Capitalized, getCapitalized } from "./capitalized";
import { ConstructedKebab, getConstructedKebab } from "./constructed-kebab";
import {
  DeconstructedKebab,
  getDeconstructedKebab,
} from "./deconstructed-kebab";
import { FilterByLanguage, getFilterByLanguage } from "./filter-by-language";
import { FormattedHeight, getFormattedHeight } from "./formatted-height";
import {
  getHeightInFeetInches,
  HeightInFeetInches,
} from "./height-in-feet-inches";
import { getIdsFromUrl, IdsFromUrl } from "./ids-from-url";
import { sanitizeString, SanitizeString } from "./sanitize-string";
import { getTitle, Title } from "./title";
import { getWeightInPounds, WeightInPounds } from "./weight-in-pounds";

export interface Helpers {
  capitalized: Capitalized;
  constructedKebab: ConstructedKebab;
  deconstructedKebab: DeconstructedKebab;
  filterByLanguage: FilterByLanguage;
  formattedHeight: FormattedHeight;
  heightInFeetInches: HeightInFeetInches;
  idsFromUrl: IdsFromUrl;
  sanitizeString: SanitizeString;
  title: Title;
  weightInPounds: WeightInPounds;
}

const helpers: Helpers = {
  capitalized: getCapitalized,
  constructedKebab: getConstructedKebab,
  deconstructedKebab: getDeconstructedKebab,
  filterByLanguage: getFilterByLanguage,
  formattedHeight: getFormattedHeight,
  heightInFeetInches: getHeightInFeetInches,
  idsFromUrl: getIdsFromUrl,
  sanitizeString: sanitizeString,
  title: getTitle,
  weightInPounds: getWeightInPounds,
};

export default Object.freeze(helpers);
