import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Flex,
} from "@chakra-ui/react";
import Header from "../Header";
import Screening from "./Screening";
import { fetchAndStoreData, Article } from "../../utils/data";

const HomePage = () => {
  const [query, setQuery] = useState("bipolar");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (query === "bipolar disorder") {
      (async () => {
        const data = await fetchAndStoreData(query, 10);
        setArticles(data);
      })();
    }
  }, [query]);

  return (
    <Box>
      <Header />
      <Box display="flex" justifyContent="center">
        <Tabs
          width="60%"
          align="center"
          alignContent="center"
          variant="enclosed"
          isFitted
        >
          <TabList>
            <Tab>OVERVIEW</Tab>
            <Tab>SCREENING</Tab>
            <Tab>FULL REVIEW</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Test</TabPanel>
            <TabPanel>
              <Screening
                articles={articles}
                query={query}
                setQuery={setQuery}
              />
            </TabPanel>
            <TabPanel>Test3</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default HomePage;
