import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, Flex, Switch } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import Filter from "../Filter";
import Card from '../Card';

type ScreeningProps = {
  articles: Article[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const Screening = ({ articles, query, setQuery }: ScreeningProps) => {
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  return (
    <Flex direction="column">
      <Flex justifyContent="flex-end" marginBottom="12px">
        <Text>Tinder Mode</Text>
        <Switch
          size="lg"
          marginLeft="16px"
          onChange={() =>
            setIsCarouselMode((isCarouselMode) => !isCarouselMode)
          }
        />
      </Flex>
      {isCarouselMode ? (
        <Text>Carousel</Text>
      ) : (
        <Flex direction="column">
          <Filter query={query} setQuery={setQuery} />
          {articles[0]  && <Card article={articles[0]}/>}
        </Flex>
      )}
    </Flex>
  );
};

export default Screening;
