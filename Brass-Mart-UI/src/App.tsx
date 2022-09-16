import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Router from "./Router/Router";


const theme = extendTheme();

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
  </ChakraProvider>
);
