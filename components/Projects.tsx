import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid, Heading, Link } from "@chakra-ui/layout";
import { AiFillGithub } from "react-icons/ai";
import * as React from "react";

export interface ProjectsProps {}

const Projects: React.SFC<ProjectsProps> = ({}) => {
  return (
    <Flex
      w="full"
      p="7"
      flexDir="column"
      h="fit-content"
      boxSizing="border-box"
      id="projects"
      zIndex={10}
      pos="relative"
    >
      <Flex
        borderRadius="lg"
        w="98%"
        m="auto"
        flexDir="column"
        // background="gray.700"
        p="10"
        boxShadow="2xl"
      >
        <Heading lineHeight="1" size="lg" mb="7" color="whitesmoke">
          My Projects
        </Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          w="full"
        >
          <Box
            maxW={["100%", "100%", "100%", "72", "72", "72"]}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            background="gray.700"
          >
            <Image
              src="https://i.imgur.com/g0SePZl.png"
              // boxShadow="xl"
              alt="image"
            />
            <Box p="5">
              <Box>
                <Badge borderRadius="full" px="2" colorScheme="blue">
                  Typescript
                </Badge>
                <Badge borderRadius="full" px="2" colorScheme="gray" ml="2">
                  Next.JS
                </Badge>
                <Badge borderRadius="full" px="2" colorScheme="cyan">
                  Prisma DB
                </Badge>
                <Badge borderRadius="full" px="2" colorScheme="teal" ml="2">
                  Chakra UI
                </Badge>
              </Box>
              <Box
                isTruncated
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              >
                Mobile Data Terminal
              </Box>
              <Box
                fontSize="sm"
                display="flex"
                flexDir="column"
                justifyContent="flex-end"
              >
                A data management site at the core for police officer who
                roleplay
                <Box as="span" color="gray.600" fontSize="sm">
                  Made for Raze Network
                </Box>
              </Box>
              <Box mt="3">
                <Button
                  as={Link}
                  href="https://mdt-one.vercel.app/"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  size="sm"
                  borderRadius="full"
                  colorScheme="teal"
                  variant="outline"
                >
                  View Project
                </Button>
                <IconButton
                  as={Link}
                  icon={<AiFillGithub />}
                  isExternal
                  borderRadius="full"
                  size="sm"
                  variant="ghost"
                  mx="2"
                  aria-label="to-repo"
                  href="https://github.com/TwoTap02"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Projects;
