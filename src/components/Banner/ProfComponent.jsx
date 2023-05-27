import React from "react";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import myimage from "../../images/2__E6A3501.jpg"
import myimage2 from "../../images/2__E6A3501.png"
import ParticleSettings from "./ParticleSettings";


function ProfComponent(){
    return(
        <div className="Contain" style={{position: 'relative'}}>
            <div id="tsparticles" style={{position:"absolute"}}>
                <ParticleSettings  />
            </div>
            <div className="Text">
                <h4>Hello <span className="green">I am</span></h4>
                <h1 className="green">Nasir Daneshiar</h1>
                <div className="myProf">
                    
                    <ul className="dynamic-txts">
                        <li><h3>A Blockchain Developer</h3></li>
                        <li><h3>A Fullstack Web Developer</h3></li>
                        <li><h3>An AI specialist</h3></li>
                    </ul>
                    
                </div>
                <p>I'm very interested in the blockchain and web(3), AI, and the Internet of robotic things.</p>
                <button className="btn btn-lg green2">Let's talk</button>
                <div className="Social">
                    <p>Check out my</p>
                    <div className="social-icons">
                        <span><a href="#"> <AiFillInstagram /> </a></span>
                        <span><a href="#"> <AiOutlineWhatsApp /> </a></span>
                        <span><a href="#"> <AiFillLinkedin /> </a></span>
                    </div>
                </div>
            </div>
            <div className="Profile">
                <div class="hex">
                    <div class="hex-background">
                        <img src={myimage2} />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default ProfComponent
