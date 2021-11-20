import React from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Header from '../header'

const Screening = () => {
  return (
    <Box>
      <Header />
      <Box display="flex" justifyContent="center">
        <Tabs width="44%" align="center" alignContent="center" variant="enclosed" isFitted>
          <TabList>
            <Tab>Test</Tab>
            <Tab>Test2</Tab>
            <Tab>Test3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              Test
            </TabPanel>
            <TabPanel>
              Test2
            </TabPanel>
            <TabPanel>
              Test3
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Screening