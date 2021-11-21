import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, Flex, Switch, Container } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import Filter from "../Filter";
import Card from "../Card";
import Carousel from "../Carousel";
import { useApproveDenyButtons } from "../../utils/useApproveDenyButtons";
import { getLocalStorageObj } from "../../utils/LocalStorageUtils";

const SCREENED_ARTICLES_KEY = "screenedArticles";

type FullReviewProps = {
  articles: Article[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setArticles: Dispatch<React.SetStateAction<Article[]>>;
};

const FullReview = ({}: FullReviewProps) => {
  const [articles, setArticles] = useState<Article[]>(
    getLocalStorageObj(SCREENED_ARTICLES_KEY)
  );
  const { onApproveClick, onRejectClick } = useApproveDenyButtons(
    SCREENED_ARTICLES_KEY,
    articles,
    setArticles
  );

  return (
    <Flex direction="column">
      <Flex direction="column">
        {articles &&
          articles.map((article) => (
            <Card
              key={article.doi}
              article={article}
              onApproveClick={() => onApproveClick(article)}
              onRejectClick={() => onRejectClick(article.title)}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default FullReview;
