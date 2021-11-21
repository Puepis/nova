import React, { useState } from "react";
import { Flex, Button, Icon, Box } from "@chakra-ui/react";
import { Article } from "../utils/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

type CarouselProps = {
  articles: Article[];
  onApproveClick: (obj: any) => void;
  onRejectClick: (title: string) => void;
};

const Carousel = ({
  articles,
  onApproveClick,
  onRejectClick,
}: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const prevArticle = () => {
    setIndex((index) => index - 1);
  };

  const nextArticle = () => {
    setIndex((index) => index + 1);
  };

  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <Button onClick={prevArticle} isDisabled={index === 0}>
          <Icon as={FaChevronLeft} />
        </Button>
        <Box margin="0px 28px">
          <Card
            article={articles[index]}
            onApproveClick={() => onApproveClick(articles[index])}
            onRejectClick={() => onRejectClick(articles[index].title)}
          />
        </Box>
        <Button onClick={nextArticle} isDisabled={index >= articles.length - 1}>
          <Icon as={FaChevronRight} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Carousel;
