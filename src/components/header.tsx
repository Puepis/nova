import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Flex w="100%">
        <Text margin="8px 0px 0px 16px" fontFamily="inter" fontWeight="bold" fontSize="30px">
          Nova
        </Text>
        <Button margin="8px 16px 0px auto" backgroundColor="purple.300" color="white">
          Logout
        </Button>
      </Flex>
    </>
  )
}

export default Header