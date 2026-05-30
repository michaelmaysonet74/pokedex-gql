import { MetaPokemon } from "..";

export const getGeneration = (parent: MetaPokemon): number | null => {
  const { id } = parent;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return null;

  if (parsedId >= 1 && parsedId <= 151) return 1;
  if (parsedId >= 152 && parsedId <= 251) return 2;
  if (parsedId >= 252 && parsedId <= 386) return 3;
  if (parsedId >= 387 && parsedId <= 493) return 4;
  if (parsedId >= 494 && parsedId <= 649) return 5;
  if (parsedId >= 650 && parsedId <= 721) return 6;
  if (parsedId >= 722 && parsedId <= 809) return 7;
  if (parsedId >= 810 && parsedId <= 905) return 8;
  if (parsedId >= 906 && parsedId <= 1025) return 9;

  return null;
};
