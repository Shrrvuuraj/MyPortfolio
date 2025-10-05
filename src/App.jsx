import About from "./section/About";
import Contact from "./section/Contact";
import Experiences from "./section/Experiences";

import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";
import Testimonial from "./section/Testimonial";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experiences /> */}
      {/* <Testimonial /> <section className="min-h-screen"></section> */}
      <Contact/>
      
    
    </div>
  );
};

export default App;
