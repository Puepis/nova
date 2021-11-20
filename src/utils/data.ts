const URL_BASE = "https://api.springernature.com/metadata/json";
export const fetchAndStoreData = async (
  keyword: string,
  numResults: number
) => {
  const url = `${URL_BASE}?api_key=${process.env.REACT_APP_API_KEY}&q=keyword:${keyword}&s=1&p=${numResults}`;
  const response = await fetch(encodeURI(url));
  const data = await response.json()
  console.log(data);
  return data;
};
