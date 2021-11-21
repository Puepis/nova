import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, Flex, Switch, Container } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import Filter from "../Filter";
import Card from "../Card";
import Carousel from "../Carousel";

type ScreeningProps = {
  articles: Article[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const Screening = ({ articles, query, setQuery }: ScreeningProps) => {
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  return (
    <Flex direction="column">
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        marginBottom="12px"
        maxW="container.md"
      >
        <Text>Carousel Mode</Text>
        <Switch
          size="lg"
          marginLeft="16px"
          onChange={() =>
            setIsCarouselMode((isCarouselMode) => !isCarouselMode)
          }
        />
      </Container>
      {isCarouselMode ? (
        <Carousel articles={articles} />
      ) : (
        <Flex direction="column">
          <Filter query={query} setQuery={setQuery} />
          {articles &&
            articles.map((article) => (
              <Card key={article.doi} article={article} />
            ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Screening;
