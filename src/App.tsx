import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col w-full relative">
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
