// 1. import `extendTheme` function
import {
  extendTheme,
  ThemeConfig,
  Theme,
  ColorModeScript,
  Colors,
} from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  ...{ config },
  ...{
    initalColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;