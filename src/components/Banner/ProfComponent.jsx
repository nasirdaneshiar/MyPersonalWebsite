import React from "react";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import myimage from "../../images/2__E6A3501.jpg"
import myimage2 from "../../images/2__E6A3501.png"
import myimage3 from "../../images/nasirimage1-transformed.png";
import ParticleSettings from "./ParticleSettings";
import { AiFillGithub } from 'react-icons/ai';
import { Slide } from "react-awesome-reveal";


function ProfComponent(){
    return(
        <div className="Contain" style={{position: 'relative'}} id="portfolio">
            <div id="tsparticles" style={{position:"absolute"}}>
                <ParticleSettings  />
            </div>
            <Slide direction="left">
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
                    <button className="btn btn-lg green2"><a href="https://wa.me/+989132295093">Let's talk</a> </button>
                    <div className="Social">
                        <p>Check out my</p>
                        <div className="social-icons">
                            <span><a href="https://wa.me/+989132295093"> <AiOutlineWhatsApp size="2x" /> </a></span>
                            <span><a href="https://github.com/nasirdaneshiar"> <AiFillGithub size="2x" /> </a></span> 
                            <span><a href="https://www.linkedin.com/in/nasir-daneshiar-71013268/"> <AiFillLinkedin size="2x" /> </a></span>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide direction="right">
            <div className="Profile">
                <div class="hex">
                    <div class="hex-background">
                        <img src={myimage3} />
                    </div>
                </div>
            </div>
            </Slide>
           
        </div>
    )
}

export default ProfComponent

