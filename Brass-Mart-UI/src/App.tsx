import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Router from "./Router/Router";

const theme = extendTheme();

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <Router />
  </ChakraProvider>
);
