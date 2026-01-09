import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Ending from "./components/Ending";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Ending />
    </>
  );
}

export default App;
