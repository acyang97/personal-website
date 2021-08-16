import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Main = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default Main;
