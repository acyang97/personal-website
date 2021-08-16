import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Main = () => {
  return (
    <>
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
