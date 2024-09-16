export function formatJSON(jsonString: string) {
  const jsonObject = JSON.parse(jsonString);
  const formattedJSON = JSON.stringify(jsonObject, null, 2);

  return formattedJSON;
}
