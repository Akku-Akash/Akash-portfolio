import Loader from './components/Loader'
import Nav from './components/Nav';
import Masthead from './components/Masthead';
import About from './components/About';
import Scrollbar from './components/Scrollbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { works, skills, projects,  main, about, LiveProjects } from './data/resumeData';
import Live from './components/Projects/liveIndex';


function App() {
  return (
    <>
      <Loader />
      <Nav {...main} />
      <div id="pagepiling">
        <Masthead {...main} />
        <About {...about} />
        <Experience works={works} />
        <Skills {...skills} />
        <Live projects={LiveProjects} github="https://github.com/Akku-Akash" />
        <Projects projects={projects} github="https://github.com/Akku-Akash" />
        
        
        {/* <News /> */}
        <Contact {...main} />
      
      </div>
      <Scrollbar />
    </>
  );
}

export default App;
