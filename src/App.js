
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;