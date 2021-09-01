import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = ({}) => {
  return (
    <Flex
      w="100vw"
      maxW="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      // overflowX="hidden"
      pos="relative"
    >
      <Image
        src="https://i.imgur.com/zBiWRJ4.png"
        pos="absolute"
        top="-50%"
        left="-50%"
      />
      <Image
        src="https://i.imgur.com/E0rPoX4.png"
        pos="absolute"
        top="20%"
        left="80%"
        transform="rotate(-60deg)"
        zIndex={2}
      />
      <Flex
        pos="absolute"
        top="30%"
        flexDir="column"
        justifyContent="center"
        id="home"
      >
        <Heading size="3xl">Ben Macleod</Heading>
        <Text
          textAlign="center"
          mt="2"
          fontSize="2xl"
          textTransform="lowercase"
          background="linear-gradient(45deg, #f3ec78, #af4261);"
          backgroundClip="text"
        >
          Web Developer
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
