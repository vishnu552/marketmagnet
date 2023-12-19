import React, { useState } from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    const response = await axios.post(
      "http://localhost:4000/api/v1/auth/login",
      loginData
    );
    console.log("Login Data Submitted:", response);
    alert(` Hello ${response.data.user.firstName} Logged in successfully`);
    navigate("/desktop");
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        maxW="md"
        mx="auto"
        mt="8"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading mb="4">Login</Heading>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="full">
            Login
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default LoginPage;
