
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        {/*<Skills />*/}
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
