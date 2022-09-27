import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/Element/Index";
import Main from "./components/Main";
import Cover from "./components/Cover";
import SimpleBar from "simplebar-react";
import { Skeleton } from "@chakra-ui/react";

function App() {
  return (
    <div className="App ">
      <ChakraProvider theme={theme}>
        <Cover />
        <Main className="ogee" />
      </ChakraProvider>
    </div>
  );
}

export default App;
