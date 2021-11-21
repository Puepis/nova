import React from 'react';
import { Container, Text, Button, Box } from '@chakra-ui/react';
import { Article } from "../utils/data";

type CardType = {
  article: Article
}

const Card = ({ article }: CardType) => {
  const { title, authors, publication, abstract, url } = article;
  return (
    <Container
      maxW="container.md"
      display="flex"
      flexDirection="column"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      alignContent="flex-start"
    >
      <Text fontSize="10px">Published: {publication.publicationDate}</Text>
      <Text>{title}</Text>
      <Text>{authors.toString()}</Text>
      <Text>{publication.publicationName}</Text>
      <Text>{abstract}</Text>
      <Text>{url}</Text>
      <Box>
        <Button backgroundColor="green.100" _hover={{ bg: "green.200" }} color="white">Approve</Button>
        <Button backgroundColor="red.100" _hover={{ bg: "red.200" }} color="white">Deny</Button>
      </Box>
    </Container>
  )
}

export default Card