import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Philosophy from "./components/sections/Philosophy";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
  <a href="#main-content" className="skip-link">
    Skip to main content
  </a>

  <Navbar />

  <main id="main-content">
    <Hero />
    <About />
    <Philosophy />
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