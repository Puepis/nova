import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import FullReviewCard from "../FullReviewCard";
import { useApproveDenyButtons } from "../../utils/useApproveDenyButtons";
import { getLocalStorageObj } from "../../utils/LocalStorageUtils";

const SCREENED_ARTICLES_KEY = "screenedArticles";

const FullReview = () => {
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
      <Text marginBottom="8px">
        Read through each article and choose whether to include it!
      </Text>
      {articles &&
        articles.map((article) => (
          <FullReviewCard
            key={article.doi}
            article={article}
            onApproveClick={() => onApproveClick(article)}
            onRejectClick={() => onRejectClick(article.title)}
          />
        ))}
    </Flex>
  );
};

export default FullReview;
