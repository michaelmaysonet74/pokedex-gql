const SPECIAL_NAMES: Record<string, string> = {
  "chien-pao": "Chien-Pao",
  "chi-yun": "Chi-Yu",
  farfetchd: "Farfetch'd",
  "hakamo-o": "Hakamo-o",
  "ho-oh": "Ho-Oh",
  "kommo-o": "Kommo-o",
  "mime-jr": "Mime Jr.",
  "mr-mime": "Mr. Mime",
  "mr-rime": "Mr. Rime",
  "porygon-z": "Porygon-Z",
  sirfetchd: "Sirfetch'd",
  "ting-lu": "Ting-Lu",
  "type-null": "Type: Null",
  "wo-chien": "Wo-Chien",
};

interface SpecialNameMapperParams {
  name: string;
}

export type SpecialNameMapper = (p: SpecialNameMapperParams) => string | null;

export const getSpecialName = ({
  name,
}: SpecialNameMapperParams): string | null => SPECIAL_NAMES[name] ?? null;
