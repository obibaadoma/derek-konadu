import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const About = lazy(() => import("./components/sections/About"));
const Philosophy = lazy(() => import("./components/sections/Philosophy"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Philosophy />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
