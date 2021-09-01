import { Flex } from "@chakra-ui/layout";
import type { NextPage } from "next";
import * as React from "react";
import MySkills from "../components/MySkills";
import { Image } from "@chakra-ui/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/Home";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Flex w="full" flexGrow={1} flexDir="column">
        <HomePage />
        <About />
        <MySkills />
      </Flex>
      <Footer />
    </div>
  );
};

export default Home;
