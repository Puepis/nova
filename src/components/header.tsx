import React from "react";
import { Flex, Button, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      boxShadow="0px -6px 10px black"
      justifyContent="space-between"
      padding="18px 32px"
    >
      <Flex direction="row">
        <Image width="34px" src={Logo} alt="Nova logo" />
        <Text fontWeight="bold" fontSize="26px" marginLeft="8px">
          Nova
        </Text>
      </Flex>
      <Button
        backgroundColor="purple.300"
        color="white"
        onClick={() => navigate("/login")}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default Header;
