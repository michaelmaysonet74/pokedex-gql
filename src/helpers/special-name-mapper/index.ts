const EXTERNAL_TO_SPECIAL_NAMES: Record<string, string> = {
  "aegislash-shield": "Aegislash",
  "basculegion-male": "Basculegion",
  "basculin-red-striped": "Basculin",
  "chi-yu": "Chi-Yu",
  "chien-pao": "Chien-Pao",
  "darmanitan-standard": "Darmanitan",
  "deoxys-normal": "Deoxys",
  "dudunsparce-two-segment": "Dudunsparce",
  "eiscue-ice": "Eiscue",
  "enamorus-incarnate": "Enamorus",
  farfetchd: "Farfetch'd",
  "giratina-altered": "Giratina",
  "gourgeist-average": "Gourgeist",
  "hakamo-o": "Hakamo-o",
  "ho-oh": "Ho-Oh",
  "indeedee-male": "Indeedee",
  "jangmo-o": "Jangmo-o",
  "keldeo-ordinary": "Keldeo",
  "kommo-o": "Kommo-o",
  "landorus-incarnate": "Landorus",
  "lycanroc-midday": "Lycanroc",
  "maushold-family-of-four": "Maushold",
  "meloetta-aria": "Meloetta",
  "meowstic-male": "Meowstic",
  "mime-jr": "Mime Jr.",
  "mimikyu-disguised": "Mimikyu",
  "minior-red-meteor": "Minior",
  "morpeko-full-belly": "Morpeko",
  "mr-mime": "Mr. Mime",
  "mr-rime": "Mr. Rime",
  "nidoran-f": "Nidoran♀",
  "nidoran-m": "Nidoran♂",
  "oinkologne-male": "Oinkologne",
  "oricorio-baile": "Oricorio",
  "palafin-zero": "Palafin",
  "porygon-z": "Porygon-Z",
  "pumpkaboo-average": "Pumpkaboo",
  "shaymin-land": "Shaymin",
  sirfetchd: "Sirfetch'd",
  "squawkabilly-green-plumage": "Squawkabilly",
  "tatsugiri-curly": "Tatsugiri",
  "thundurus-incarnate": "Thundurus",
  "ting-lu": "Ting-Lu",
  "tornadus-incarnate": "Tornadus",
  "toxtricity-amped": "Toxtricity",
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
