import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Router from "./Router/Router";


const theme = extendTheme();

const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);

export default App;
