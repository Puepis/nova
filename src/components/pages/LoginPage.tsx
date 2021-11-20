import React from "react";
import { Box, Flex, Image, Heading, Button } from "@chakra-ui/react";
import LoginBackgroundImage from "../../assets/login-background.png";
import LoginForm from "../auth/LoginForm";

const LoginPage = () => {
  return (
    <Flex>
      <Flex background="gray.100" width="40vw" height="100vh">
        <Flex direction="column" height="100%">
          <Flex margin="20px">
            {/* <Image width="80px" src={Logo} alt="Nova logo" /> */}
            <Heading as="h3" size="lg" marginLeft="40px">
              Nova
            </Heading>
          </Flex>
          <Flex height="100%" justifyContent="center" direction="column">
            <Box marginLeft="20px" marginBottom="140px">
              <Image
                width="90%"
                src={LoginBackgroundImage}
                alt="Login background image"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width="500px"
        marginLeft="120px"
        marginBottom="70px"
        direction="column"
        justifyContent="center"
      >
        <Heading as="h3" size="lg">
          Sign in to continue!
        </Heading>
        <LoginForm />
        <Button
          marginTop="32px"
          backgroundColor="purple.200"
          color="white"
          width="100%"
          onClick={() => {}}
          textTransform="none"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
