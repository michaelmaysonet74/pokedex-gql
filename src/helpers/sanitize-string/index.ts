interface SanitizeStringParams {
  str: string;
}

export type SanitizeString = (p: SanitizeStringParams) => string;

const regex = new RegExp(/\u00ad\s/g);

export const sanitizeString = ({ str }: SanitizeStringParams): string =>
  str
    .split("\n")
    .join(" ")
    .split("\f")
    .join(" ")
    .replace(regex, "")
    .replace("’", "'")
    .trim();
