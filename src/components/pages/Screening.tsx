import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, Flex, Switch, Container } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import Filter from "../Filter";
import Card from "../Card";
import { useApproveDenyButtons } from "../../utils/useApproveDenyButtons";

const SCREENED_ARTICLES_KEY = "screenedArticles";

type ScreeningProps = {
  articles: Article[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setArticles: Dispatch<React.SetStateAction<Article[]>>;
};

const Screening = ({
  articles,
  query,
  setQuery,
  setArticles,
}: ScreeningProps) => {
  const [isCarouselMode, setIsCarouselMode] = useState(false);
  const { onApproveClick, onRejectClick } = useApproveDenyButtons(
    SCREENED_ARTICLES_KEY,
    articles,
    setArticles
  );

  return (
    <Flex direction="column">
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        marginBottom="12px"
        maxW="container.md"
      >
        <Text>Tinder Mode</Text>
        <Switch
          size="lg"
          marginLeft="16px"
          onChange={() =>
            setIsCarouselMode((isCarouselMode) => !isCarouselMode)
          }
        />
      </Container>
      {isCarouselMode ? (
        <Text>Carousel</Text>
      ) : (
        <Flex direction="column">
          <Filter query={query} setQuery={setQuery} />
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
      )}
    </Flex>
  );
};

export default Screening;
