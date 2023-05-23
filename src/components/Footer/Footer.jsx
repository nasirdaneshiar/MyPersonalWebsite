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


const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='footerProfile'>
                <h1>Profile</h1>
                <div className='address'>
                    <h1>Address:</h1>
                    <p>Iran, Tehran, Matahari street</p>
                </div>
                <div className='links'>
                    <h1>Contact me directly:</h1>
                    <div>
                        <span><AiFillPhone/></span>
                        <a href="tel:+989132295093">+98 913 22 95 093</a>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen/></span>
                        <a href="mailto:bkaraneai@gmail.com">bkaranehai@gmail.com</a>
                    </div>
                </div>
                <div className="profiles">
                    <h1>Check my profiles</h1>
                    <div className='icons'>
                        <span><a href='#'><AiFillGithub/></a></span>
                        <span><a href='#'><AiFillLinkedin/></a></span>
                        <span><a href='#'><AiFillInstagram/></a></span>
                        <span><a href='#'><BsFacebook/></a></span>
                    </div>
                </div>
                <div className='ArrowUp'><AiOutlineArrowUp /></div>
            </div>
            <div className='form'>
                <form action="">
                    <div className="name">
                        <span><CgProfile /></span>
                        <input type="text" placeholder='Fullname...' />
                    </div>
                    <div className="email">
                        <span></span>
                        <input type="email" placeholder='Email...' />
                    </div>
                    <div className="message">
                        <span></span>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
                    </div>
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Footer;