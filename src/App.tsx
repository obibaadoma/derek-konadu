import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;