import React from "react";
import Slider from "./Slider"; 

function Projects(){
    return(
        <div className="projectsContainer">
            <h1>Recent <span className="green">Projects</span></h1>
            <p>This is list of recent projects I've done,by hovering each item you can see the descrption, source code and a short video for describing some of projects.</p>
            <div className="slide">
                <Slider />
            </div>
        </div>
    )
}

export default Projects

