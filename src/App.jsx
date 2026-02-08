import Nav from "./view/Nav";
import Hero from "./view/Hero";
import About from "./view/About";
import Portfolio from "./view/Portfolio";
import Contact from "./view/Contact";
import Footer from "./view/Footer";
import "./fonts/league-spartan/LeagueSpartan-Bold.otf";

function App() {
  return (
    <div className=" overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
