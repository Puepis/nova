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
import Overview from "./Overview";

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
              OVERVIEW
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
              SCREENING
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
              FULL REVIEW
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
