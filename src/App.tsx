// Page
import Page from "./components/Page";
// Header
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>
  </Page>
}

export default App;
