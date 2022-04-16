import helpers from "../helpers";
import { RequestContext } from "./types";

export const context = (): RequestContext => ({
  helpers,
});
