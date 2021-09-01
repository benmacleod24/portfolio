import { Box, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import * as React from "react";
import theme from "../_chakra/theme";

export interface StatBarProps {
  label: string;
  stopValue: number;
  width: number;
  color: string;
}

const StatBar: React.SFC<StatBarProps> = ({
  label,
  stopValue,
  width,
  color,
}) => {
  const [value, setValue] = React.useState(-0.0);
  const [level, setLevel] = React.useState("Beginner");

  React.useEffect(() => {
    setValue(0.0);

    if (stopValue <= 0.5) return setLevel("Beginner");
    if (stopValue <= 0.8) return setLevel("Proficient");
    if (stopValue <= 1.0) return setLevel("Inside & Out");
  }, []);

  React.useEffect(() => {
    if (value > stopValue) return;
    setValue(value + 0.01);
  }, [value]);

  return (
    <Flex flexDir="column">
      <Flex
        width={[
          `${width / 1}px`,
          `${width / 3}px`,
          `${width / 2.5}px`,
          `${width / 2}px`,
          `${width}px`,
        ]}
        background="#1F2937"
        borderRadius="full"
        overflow="hidden"
        my="2"
        h="30px"
        pos="relative"
        alignItems="center"
        boxShadow="xl"
      >
        <Flex
          width={[
            `${value * (width / 2.7)}px`,
            `${value * (width / 3)}px`,
            `${value * (width / 2.5)}px`,
            `${value * (width / 2)}px`,
            `${value * width}px`,
          ]}
          borderRightRadius="full"
          h="full"
          background={color}
          transition="1s ease"
          transitionDelay="0.2s"
          pos="relative"
          alignItems="center"
        >
          <Text
            fontSize="sm"
            fontWeight="bold"
            lineHeight="1"
            pos="absolute"
            right="3"
            display={["none", "none", "none", "none", "inherit"]}
          >
            {level}
          </Text>
        </Flex>
        <Text
          fontSize="sm"
          fontWeight="bold"
          lineHeight="1"
          pos="absolute"
          left="3"
        >
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};

export default StatBar;
