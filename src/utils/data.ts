import { setLocalStorageObj } from "./LocalStorageUtils";

export interface Publication {
  publicationName: string;
  publicationDate: string;
  issn: string;
  volume: string;
  number: string;
}
export interface Article {
  title: string;
  authors: string[];
  abstract: string;
  doi: string;
  url: string;
  publication: Publication;
  copyright: string;
}

const URL_BASE = "https://api.springernature.com/metadata/json";
const fetchAndStoreData = async (keyword: string, numResults: number) => {
  const url = `${URL_BASE}?api_key=${process.env.REACT_APP_API_KEY}&q=keyword:${keyword}&s=1&p=${numResults}`;
  const response = await fetch(encodeURI(url));
  const data = await response.json();
  const articles = parseData(data);
  setLocalStorageObj("data", articles);
  return articles;
};

const parseData = (data: any): Article[] => {
  return data["records"].map((record: any) => {
    return {
      title: record["title"],
      authors: record["creators"].map((e: any) => e["creator"]),
      abstract: record["abstract"],
      doi: record["doi"],
      url: record["url"][0]["value"],
      publication: {
        publicationName: record["publicationName"],
        publicationDate: record["publicationDate"],
        issn: record["issn"],
        volume: record["volume"],
        number: record["number"],
      },
      copyright: record["copyright"],
    };
  });
};

export { fetchAndStoreData };
