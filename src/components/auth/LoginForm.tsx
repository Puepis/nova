import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onShowPasswordClick = async () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex direction="column">
      <FormControl isRequired marginTop="30px">
        <FormLabel htmlFor="last-name">Full Name</FormLabel>
        <Input
          id="last-name"
          size="md"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Enter full name"
        />
      </FormControl>
      <FormControl isRequired marginTop="30px">
        <FormLabel htmlFor="email" color={"black"}>
          Email Address
        </FormLabel>
        <Input
          id="email"
          size="md"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          isInvalid={false}
          placeholder="Enter email address"
        />
      </FormControl>
      <FormControl isRequired marginTop="30px">
        <FormLabel htmlFor="password" color="black">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            isInvalid={false}
            placeholder="Enter password"
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              onClick={onShowPasswordClick}
              aria-label={showPassword ? "Shown" : "Hidden"}
              icon={showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              color={showPassword ? "blue.100" : "gray.400"}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default LoginForm;
