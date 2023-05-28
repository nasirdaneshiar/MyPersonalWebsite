import React from "react";
import Slider from "./Slider"; 
import { Zoom } from "react-awesome-reveal"

function Projects(){
    return(
        <div className="projectsContainer" id="projects">
            <Zoom>
                <h1>Recent <span className="green">Projects</span></h1>
                <p>This is list of recent projects I've done.<br />By hovering each item you can see the descrption, <br /> source code and a short video for describing some of projects.</p>
            </Zoom>
            
            <div className="slide">
                <Slider />
            </div>
        </div>
    )
}

export default Projects

