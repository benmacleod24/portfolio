import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export interface AboutProps {}

const About: React.SFC<AboutProps> = ({}) => {
  return (
    <Flex
      w="100vw"
      h="50vh"
      id="aboutMe"
      px="7"
      pos="relative"
      zIndex={1}
      //   background="red"
    >
      <Image
        src="https://i.imgur.com/ZQYrr1s.png"
        pos="absolute"
        top="-11%"
        left="-50%"
        pointerEvents="none"
      />
      <Flex
        borderRadius="lg"
        w="98%"
        m="auto"
        flexDir="column"
        background="gray.700"
        p="10"
        boxShadow="2xl"
        // zIndex={4}
      >
        <Heading mb="4" lineHeight="1" size="lg" color="whitesmoke" zIndex={2}>
          About Me
        </Heading>
        <Text
          mb="1"
          fontWeight="semibold"
          fontSize="md"
          background="linear-gradient(45deg, #f1a7f1, #fad0c4);"
          backgroundClip="text"
        >
          Hello, I'm Ben Macleod!{" "}
        </Text>
        <Text maxWidth="75%" color="gray.400" lineHeight="1.3">
          I have been a web developer for nearly 2 years. During those two years
          I taught myself how to develop my web applications in multiple
          different frameworks & methods. During all this experiences I found
          the most interest and efficency in working with React JS coupled with
          typescript. I don't spend all my time developing; I enjoy surfing,
          spending time on the water, and I can't forget golfing. I tend to find
          more ideas and inspiration for my projects when I step away from my
          computer.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
