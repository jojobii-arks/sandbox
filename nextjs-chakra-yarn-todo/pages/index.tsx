import {
  Stack,
  Container,
  Heading,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing={16}>
        <VStack spacing={4} pt={8} textAlign="center">
          <Heading as="h1" size="2xl">
            Next.js + ChakraUI
          </Heading>
          <Heading>todo list</Heading>
        </VStack>
        <Container
          maxW="container.md"
          p={4}
          borderRadius="md"
          bg="gray.200"
          shadow="lg"
        >
          <Stack>
            <HStack>
              <Input placeholder="new todo" bg="white" size="lg"></Input>
              <Button>add</Button>
            </HStack>
          </Stack>
        </Container>
      </VStack>
    </>
  );
};

export default Home;
