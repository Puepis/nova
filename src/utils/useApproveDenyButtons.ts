import React from "react";
import { getLocalStorageObj, setLocalStorageObj } from "./LocalStorageUtils";
import { Article } from "./data";

export const useApproveDenyButtons = (
  key: string,
  articles: Article[],
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>
) => {
  const removeArticle = (title: string) => {
    return articles.filter((article) => article.title !== title);
  };

  const onApproveClick = (obj: any) => {
    let storedArticles = getLocalStorageObj(key);
    if (!storedArticles) {
      storedArticles = [];
    }
    const updated = removeArticle(obj.title);

    storedArticles.push(obj);
    setArticles(updated);
    setLocalStorageObj(key, storedArticles);
  };

  const onRejectClick = (title: string) => {
    const updated = removeArticle(title);
    setArticles(updated);
  };

  return { onApproveClick, onRejectClick };
};
