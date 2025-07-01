import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import FeatProjects from "./components/homepage/FeatProjects";
import Hero from "./components/homepage/Hero";
import Skills from "./components/homepage/Skills";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeatProjects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;
