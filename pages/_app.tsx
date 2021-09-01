import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@emotion/react";
import theme from "../_chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp
