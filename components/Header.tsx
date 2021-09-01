import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = ({}) => {
  const [changeHeader, setChangeHeader] = React.useState(false);

  const scrollToElement = (id: string) => {
    const elm = document.getElementById(id);
    if (!elm) return;
    elm.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // if (window.scrollY >= 80) {
      //   setChangeHeader(true);
      // } else {
      //   setChangeHeader(false);
      // }
      console.log("scrolled");
    });

    return () => {};
  }, [changeHeader]);

  return (
    <Flex
      w="full"
      h="16"
      background={changeHeader ? "gray.800" : "transparent"}
      pos="sticky"
      top="0"
      left="0"
      px={["2", "2", "10", "10"]}
      justifyContent="space-between"
      zIndex="15"
      flexDir={["column", "column", "column", "column", "row", "row"]}
    >
      <Flex
        alignItems="center"
        userSelect="none"
        w="full"
        py={["4", "4", "4", "4", "0", "0"]}
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "left",
          "left",
        ]}
      >
        <Heading lineHeight="1" size="md">
          Ben Macleod
        </Heading>
        <Text lineHeight="1" mx="2">
          |
        </Text>
        <Text lineHeight="1">Web Developer</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "flex-end",
          "flex-end",
        ]}
      >
        <Button
          onClick={() => scrollToElement("home")}
          fontWeight="normal"
          size="sm"
          borderRadius="full"
          variant="ghost"
          transition="color 0.2s ease-in-out"
          mr="2"
          _hover={{
            background: "linear-gradient(65deg, #ffa69e, #f8ceec)",
            color: "gray.800",
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => scrollToElement("aboutMe")}
          fontWeight="normal"
          size="sm"
          borderRadius="full"
          variant="ghost"
          transition="color 0.2s ease-in-out"
          mr="2"
          _hover={{
            background: "linear-gradient(65deg, #a88beb, #f8ceec)",
            color: "gray.800",
          }}
        >
          About Me
        </Button>
        <Button
          onClick={() => scrollToElement("mySkills")}
          fontWeight="normal"
          size="sm"
          variant="ghost"
          borderRadius="full"
          transition="color 0.2s ease-in-out"
          _hover={{
            background: "linear-gradient(65deg, #3eadcf, #abe9cd)",
            color: "gray.800",
          }}
        >
          Skills & Languages
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
