import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, Flex, Switch } from "@chakra-ui/react";
import { Article } from "../../utils/data";
import Filter from "../Filter";

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
        </Flex>
      )}
    </Flex>
  );
};

export default Screening;
