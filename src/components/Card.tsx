import React from 'react';
import { Container, Text, Button } from '@chakra-ui/react';

export type CardType = {
  data: {
    publicationDate: string,
    title: string;
    creators: { creator: string }[],
    publicationName: string,
    abstract: string,
    url: { value: string }[],
    doi: string,
  }
}

const Card = ({data: { publicationDate, title, creators, publicationName, abstract, url  }} : CardType) => {
  return (
    <Container>
      <Text>{publicationDate}</Text>
      <Text>{title}</Text>
      {/* <Text>{creators}</Text> */}
      <Text>{publicationName}</Text>
      <Text>{abstract}</Text>
      {/* <Text>{url}</Text> */}
      <Button>Approve</Button>
      <Button>Deny</Button>
    </Container>
  )
}

export default Card