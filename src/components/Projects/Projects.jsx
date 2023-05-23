import React from "react";
import Slider from "./Slider"; 

function Projects(){
    return(
        <div className="projectsContainer">
            <h1>Recent <span className="green">Projects</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="slide">
                <Slider />
            </div>
        </div>
    )
}

export default Projects

