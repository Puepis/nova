import React from "react";
import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import LoginBackgroundImage from "../../assets/login-background.png";
import LoginForm from "../auth/LoginForm";

const LoginPage = () => {
  return (
    <Flex>
      <Flex background="gray.100" width="40vw" height="100vh">
        <Flex direction="column" height="100%">
          <Flex margin="40px">
            {/* <Image width="80px" src={Logo} alt="Nova logo" /> */}
            <Heading as="h3" size="lg" marginLeft="40px">
              Nova
            </Heading>
          </Flex>
          <Image
            width="100%"
            marginTop="80px"
            src={LoginBackgroundImage}
            alt="Login background image"
          />
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
          colorScheme="purple"
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
