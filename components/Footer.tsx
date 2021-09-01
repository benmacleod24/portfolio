import { Flex, Icon, Link } from "@chakra-ui/react";
import * as React from "react";
import { AiFillGithub } from "react-icons/ai";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = ({}) => {
  return (
    <Flex w="full" h="20" background="gray.800" px="10" mt="3" zIndex={10}>
      <Flex alignItems="center">
        <Icon as={AiFillGithub} fontSize="2xl" />
        <Link href="https://github.com/TwoTap02" isExternal ml="1">
          Website Repository
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
