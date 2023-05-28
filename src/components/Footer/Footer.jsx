import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import {AiFillLinkedin} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillPhone} from "react-icons/ai"
import {HiOutlineMailOpen} from "react-icons/hi"
import { AiOutlineArrowUp } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdAlternateEmail } from 'react-icons/md';
import { Slide, Zoom , Fade } from 'react-awesome-reveal'


const Footer = () => {
    return(
        <div className='footerContainer' id="footer">
            <div className='footerProfile'>
                <Slide direction='left'><h1>Profile</h1></Slide>
                <div className='address'>
                    <Slide direction='left'>
                        <h1>Address:</h1>
                        <p>Iran, Tehran, Motahari street</p>
                    </Slide>
                    
                </div>
                <div className='links'>
                    <Slide direction='left'><h1>Contact me directly:</h1></Slide>
                    
                    <div>
                        <Slide direction='left'><span><AiFillPhone/></span></Slide>
                        <Slide direction='left'><a href="tel:+989132295093">+98 913 22 95 093</a></Slide>
                    </div>
                    <div>
                        <Slide direction='left'><span><HiOutlineMailOpen/></span></Slide>
                        <Slide direction='left'><a href="mailto:bkaraneai@gmail.com">bkaranehai@gmail.com</a></Slide>
                    </div>
                </div>
                <div className="profiles">
                    <h1>Check my profiles</h1>
                    <div className='icons'>
                        <Zoom><span><a href='#'><AiFillGithub/></a></span></Zoom>
                        <Zoom><span><a href='#'><AiFillLinkedin/></a></span></Zoom>
                        <Zoom><span><a href='#'><AiFillInstagram/></a></span></Zoom>
                        <Zoom><span><a href='#'><BsFacebook/></a></span></Zoom>
                    </div>
                </div>
                <Fade>
                <div className='ArrowUp'  ><a  href="#portfolio"><AiOutlineArrowUp /></a></div>
                </Fade>
            </div>
            <div className='form'>
                <Fade>
                    <form action="">
                        <div className="name">
                            <span><CgProfile /></span>
                            <input type="text" placeholder='Fullname...' />
                        </div>
                        <div className="email">
                            <span><MdAlternateEmail /></span>
                            <input type="email" placeholder='Email...' />
                        </div>
                        <div className="message">
                            <span className='messageicon'><HiOutlineMailOpen /></span>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
                        </div>
                        <button>Submit</button>
                        
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Footer;