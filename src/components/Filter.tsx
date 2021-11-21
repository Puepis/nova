import React, { Dispatch, SetStateAction } from "react";
import {
  Flex,
  Stack,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Badge,
  Button,
  Heading,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

export type FilterBadgeProps = {
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
};

const FilterBadge = ({ filterValue, setFilterValue }: FilterBadgeProps) => {
  return (
    <Badge
      variant="solid"
      textTransform="none"
      padding="4px"
      colorScheme="blue"
    >
      {filterValue}
      <Button
        marginLeft="8px"
        variant="clear"
        size="clear"
        onClick={() => setFilterValue("")}
      >
        ✕
      </Button>
    </Badge>
  );
};

type FilterProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const Filter = ({ query, setQuery }: FilterProps) => {
  return (
    <Flex padding="16px" direction="column">
      <Flex direction="row" marginBottom="4px">
        <Flex flex={2} alignItems="center">
          <Heading float="left" size="md">
            Filters
          </Heading>
        </Flex>
        <Box flex={2} colorScheme="blue" size="secondary">
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdSearch} />
              </InputLeftElement>
              <Input
                placeholder={"Enter keyword"}
                value={query || ""}
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>
          </Stack>
        </Box>
      </Flex>
      <Flex justifyContent="left">
        {query && <FilterBadge filterValue={query} setFilterValue={setQuery} />}
      </Flex>
    </Flex>
  );
};

export default Filter;
