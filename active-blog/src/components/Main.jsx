import { Container} from "@chakra-ui/layout";

import Sidebar from "./Sidebar";
import Content from "./Account/Content";

function Main() {
  return (
    <Container  display={{ base: "block", md: "flex" }} maxW="container.xl"
    >
      <Sidebar   />  
      <Content />
    </Container>
  );
}

export default Main;
