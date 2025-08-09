const EXTERNAL_TO_SPECIAL_NAMES: Record<string, string> = {
  "aegislash-shield": "Aegislash",
  "basculegion-male": "Basculegion",
  "basculin-red-striped": "Basculin",
  "chi-yu": "Chi-Yu",
  "chien-pao": "Chien-Pao",
  "darmanitan-standard": "Darmanitan",
  "deoxys-normal": "Deoxys",
  "eiscue-ice": "Eiscue",
  farfetchd: "Farfetch'd",
  "hakamo-o": "Hakamo-o",
  "ho-oh": "Ho-Oh",
  "indeedee-male": "Indeedee",
  "jangmo-o": "Jangmo-o",
  "kommo-o": "Kommo-o",
  "lycanroc-midday": "Lycanroc",
  "mewstic-male": "Mewstic",
  "mime-jr": "Mime Jr.",
  "mimikyu-disguised": "Mimikyu",
  "morpeko-full-belly": "Morpeko",
  "mr-mime": "Mr. Mime",
  "mr-rime": "Mr. Rime",
  "nidoran-f": "Nidoran♀",
  "nidoran-m": "Nidoran♂",
  "oricorio-baile": "Oricorio",
  "porygon-z": "Porygon-Z",
  sirfetchd: "Sirfetch'd",
  "ting-lu": "Ting-Lu",
  "toxixicity-amped": "Toxtricity",
  "type-null": "Type: Null",
  "urshifu-single-strike": "Urshifu",
  "wishiwashi-solo": "Wishiwashi",
  "wo-chien": "Wo-Chien",
  "wormadam-plant": "Wormadam",
  "zygarde-50": "Zygarde",
};

const SPECIAL_NAMES_TO_EXTERNAL: Record<string, string> = Object.entries(
  EXTERNAL_TO_SPECIAL_NAMES
).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [value.toLowerCase()]: key,
  }),
  {}
);
interface SpecialNameMapperParams {
  name: string;
  inverse?: boolean;
}

export type SpecialNameMapper = (p: SpecialNameMapperParams) => string | null;

export const getSpecialName = ({
  name,
  inverse = false,
}: SpecialNameMapperParams): string | null =>
  inverse
    ? SPECIAL_NAMES_TO_EXTERNAL[name.toLowerCase()] ?? null
    : EXTERNAL_TO_SPECIAL_NAMES[name] ?? null;
