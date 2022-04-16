export * from "./capitalized";
export * from "./constructed-kebab";
export * from "./deconstructed-kebab";
export * from "./formatted-height";
export * from "./height-in-feet";
export * from "./title";
export * from "./weight-in-pounds";

import { Capitalized } from "./capitalized";
import { ConstructedKebab } from "./constructed-kebab";
import { DeconstructedKebab } from "./deconstructed-kebab";
import { FormattedHeight } from "./formatted-height";
import { HeightInFeet } from "./height-in-feet";
import { IdsFromUrl } from "./ids-from-url";
import { Title } from "./title";
import { WeightInPounds } from "./weight-in-pounds";

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
