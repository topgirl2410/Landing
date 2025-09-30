// Page
import Page from "./components/Page";
// Header
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

// Main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";
import Services from "./components/Services/Services";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>
    <Main>
      <Steps />
      <Services />
    </Main>
  </Page>
}

export default App;
