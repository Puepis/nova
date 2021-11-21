import React from "react";
import { Container, Text, Button, Box, Link } from "@chakra-ui/react";
import { Article } from "../utils/data";
import {
  setLocalStorageObj,
  getLocalStorageObj,
} from "../utils/LocalStorageUtils";

type CardType = {
  article: Article;
};

const Card = ({ article }: CardType) => {
  const { title, authors, publication, abstract, url } = article;
  return (
    <Container
      maxW="container.md"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      display="table"
      padding="27px"
    >
      <Text fontSize="10px" marginBottom="8px">
        Published: {publication.publicationDate}
      </Text>
      <Text fontSize="14px" marginBottom="6px">
        {title}
      </Text>
      <Text fontSize="11px" marginBottom="16px">
        {authors.toString()}
      </Text>
      <Text fontSize="12px" marginBottom="36px">
        {publication.publicationName}
      </Text>
      <Text fontSize="12px" fontWeight="bold" marginBottom="6px">
        Abstract
      </Text>
      <Text fontSize="12px" marginBottom="16px">
        {abstract}
      </Text>
      <Text fontSize="10px" marginBottom="44px">
        Original article: <Link>{url}</Link>
      </Text>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          width="120px"
          backgroundColor="green.100"
          _hover={{ bg: "green.200" }}
          marginRight="20px"
          color="white"
        >
          Approve
        </Button>
        <Button
          width="120px"
          backgroundColor="red.100"
          _hover={{ bg: "red.200" }}
          color="white"
        >
          Reject
        </Button>
      </Box>
    </Container>
  );
};

export default Card;
