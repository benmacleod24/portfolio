// 1. import `extendTheme` function
import {
  extendTheme,
  ThemeConfig,
  Theme,
  ColorModeScript,
  Colors,
  ThemeExtension,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "20em",
  md: "23.4375em",
  lg: "26.5625em",
  xl: "80em",
  "2xl": "96em",
});

// 3. extend the theme
const theme = extendTheme({ breakpoints, config });

export default theme;
