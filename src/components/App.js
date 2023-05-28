import React from "react";
import Header from "./Banner/Header"
import ProfComponent from "./Banner/ProfComponent";
import Projects from "./Projects/Projects";
import Services from "./Service/Services";
import Clients from "./Clients/Clients";
import Footer from "./Footer/Footer";
import { Fade } from 'react-awesome-reveal'



function App() {
  return (
    <div className="Container">
      <div className="Banner">
        <Fade>
          <Header />
          <ProfComponent />
        </Fade>
      </div>
      
        <Services />
      
      <div className="Project">
        <Projects />
      </div>
      <Clients />
      <div className="Footer">
        <Footer />
      </div>
      
      
    </div>
  );
}

export default App;


