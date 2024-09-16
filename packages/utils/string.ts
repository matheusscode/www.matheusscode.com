export const transformToPascalCase = (input: string): string => {
  const words = splitIntoWords(input);
  const capitalizedWords = words.map(capitalizeWord);
  return capitalizedWords.join("");
};

export const splitIntoWords = (input: string): string[] => {
  const cleanedInput = input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ");
  return cleanedInput.split(" ");
};

export const capitalizeWord = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
