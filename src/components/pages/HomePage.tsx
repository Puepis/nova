import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import Header from "../Header";
import Screening from "./Screening";
import { fetchAndStoreData, Article } from "../../utils/data";
import Overview from "./Overview";
import FullReview from "./FullReview";

const delay = 1000;

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        (async () => {
          const data = await fetchAndStoreData(query, 10);
          setArticles(data);
        })();
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [query] // Only re-call effect if value or delay changes
  );

  return (
    <Box>
      <Header />
      <Box display="flex" justifyContent="center">
        <Tabs
          width="container.md"
          align="center"
          alignContent="center"
          variant="enclosed"
          isFitted
          marginTop="36px"
        >
          <TabList>
            <Tab
              borderRadius="0px"
              border="1px solid"
              borderColor="purple.300"
              _selected={{
                border: "1px solid",
                borderBottom: "4px solid",
                borderColor: "purple.300",
              }}
            >
              <Text fontWeight="bold">OVERVIEW</Text>
            </Tab>
            <Tab
              borderRadius="0px"
              border="1px solid"
              borderColor="purple.300"
              _selected={{
                border: "1px solid",
                borderBottom: "4px solid",
                borderColor: "purple.300",
              }}
            >
              <Text fontWeight="bold">SCREENING</Text>
            </Tab>
            <Tab
              borderRadius="0px"
              border="1px solid"
              borderColor="purple.300"
              _selected={{
                border: "1px solid",
                borderBottom: "4px solid",
                borderColor: "purple.300",
              }}
            >
              <Text fontWeight="bold">FULL REVIEW</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Overview />
            </TabPanel>
            <TabPanel>
              <Screening
                articles={articles}
                query={query}
                setQuery={setQuery}
                setArticles={setArticles}
              />
            </TabPanel>
            <TabPanel>
              <FullReview
                articles={articles}
                query={query}
                setQuery={setQuery}
                setArticles={setArticles}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default HomePage;
