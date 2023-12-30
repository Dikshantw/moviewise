import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Sidebar</GridItem>
        </Show>
        <GridItem area="main">
          <MainBody />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
