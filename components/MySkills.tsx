import { Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import * as React from "react";
import StatBar from "./StatBar";

export interface MySkillsProps {}

const MySkills: React.SFC<MySkillsProps> = ({}) => {
  return (
    <Flex
      w="full"
      p="7"
      // px="10"
      // backgroundColor="red"
      flexDir="column"
      h="fit-content"
      boxSizing="border-box"
      id="mySkills"
      zIndex={10}
      pos="relative"
      flexGrow={1}
    >
      <Flex
        borderRadius="lg"
        w="98%"
        m="auto"
        flexDir="column"
        background="gray.700"
        p="10"
        boxShadow="2xl"
      >
        <Heading lineHeight="1" size="lg" color="whitesmoke">
          My Skills & Languages
        </Heading>
        <Text
          color="gray.400"
          maxW={["100%", "100%", "100%", "100%", "55%", "55%"]}
          my="5"
          fontSize="md"
          lineHeight="1.3"
        >
          I am a very well rounded developer with a vast knowledge of front-end
          and back-end languages. I am capable of creating a full stack website
          using React JS front-end coupled with a relational or document
          database. The framwork I am most interested in is Next JS; making all
          of my websites with this framework, and Prisma as my database client.
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <StatBar
            label="Typescript"
            stopValue={0.95}
            width={600}
            color="#3B82F6"
          />
          <StatBar
            label="Javascript"
            stopValue={1.0}
            width={600}
            color="#F0DB4F"
          />
          <StatBar
            label="React JS"
            stopValue={0.98}
            width={600}
            color="#61DBFB"
          />
          <StatBar
            label="Next JS"
            stopValue={0.8}
            width={600}
            color="#9CA3AF"
          />
          <StatBar label="MySQL" stopValue={0.8} width={600} color="#00758F" />
          <StatBar
            label="MongoDB"
            stopValue={0.5}
            width={600}
            color="#3FA037"
          />
          <StatBar
            label="Prisma DB"
            color="rgb(56, 161, 105)"
            width={600}
            stopValue={0.65}
          />
          <StatBar label="HTML" stopValue={1.0} width={600} color="#E34C26" />
          <StatBar label="CSS" stopValue={1.0} width={600} color="#2565AE" />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default MySkills;
