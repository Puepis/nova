import React from "react";
import { Container, Text, Button, Box, Link } from "@chakra-ui/react";
import { Article } from "../utils/data";

type FullReviewCardProps = {
  article: Article;
  onApproveClick: (obj: any) => void;
  onRejectClick: (title: any) => void;
};

const FullReviewCard = ({
  article,
  onApproveClick,
  onRejectClick,
}: FullReviewCardProps) => {
  const { title, authors, publication, abstract, url } = article;
  return (
    <Container
      maxW="container.md"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      display="table"
      padding="27px"
      marginBottom="16px"
    >
      <Text fontSize="10px" marginBottom="8px">
        Published: {publication.publicationDate} / {publication.publicationName}
      </Text>
      <Text fontWeight="semibold" fontSize="18px" marginBottom="6px">
        {title}
      </Text>
      <Text fontSize="12px" marginBottom="16px">
        {authors.toString()}
      </Text>
      <Text fontSize="12px" fontWeight="bold" marginBottom="6px">
        Abstract
      </Text>
      <Text fontSize="12px" marginBottom="16px">
        {abstract}
      </Text>
      <Text fontSize="11px" marginBottom="44px">
        Original article:{" "}
        <Link href={url} isExternal color="blue.500">
          {url}
        </Link>
      </Text>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          onClick={onApproveClick}
          width="120px"
          backgroundColor="green.100"
          _hover={{ bg: "green.200" }}
          marginRight="20px"
          color="white"
        >
          Include
        </Button>
        <Button
          onClick={onRejectClick}
          width="120px"
          backgroundColor="red.100"
          _hover={{ bg: "red.200" }}
          color="white"
        >
          Exclude
        </Button>
      </Box>
    </Container>
  );
};

export default FullReviewCard;
