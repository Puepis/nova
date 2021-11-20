import React from 'react';
import { Box, Flex, Tabs, TabList, Tab } from '@chakra-ui/react';
import Header from '../header'

const Screening = () => {
  return (
    <Box height="100vh">
      <Header />
      <Flex>
        <Tabs>
          <TabList>
            <Tab>Test</Tab>
            <Tab>Test2</Tab>
            <Tab>Test3</Tab>
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  )
}

export default Screening