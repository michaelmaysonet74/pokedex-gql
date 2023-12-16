interface SanitizeStringParams {
  str: string;
}

export type SanitizeString = (p: SanitizeStringParams) => string;

export const sanitizeString = ({ str }: SanitizeStringParams): string =>
  str.split("\n").join(" ").split("\f").join(" ").trim();
