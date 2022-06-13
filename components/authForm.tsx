import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextImage from "next/image";
import React, { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import { AuthModeProps } from "../types/types";

const AuthForm: FC<AuthModeProps> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        height="100px"
        justify="center"
        align="center"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex height="calc(100vh - 100px)" justify="center" align="center">
        <Box p="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Box w="25vw">
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  placeholder="email"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt="20px">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  placeholder="password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                bg="green.500"
                isLoading={isLoading}
                _hover={{ background: "green.300" }}
                mt="20px"
              >
                {mode}
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
