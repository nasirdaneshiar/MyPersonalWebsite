import React from "react";
import {GiCandleFlame} from "react-icons/gi"
import Mylogo from '../../images/logoB4.jpg'




function Header(){
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand Logo" href="#"> 
                    <span><img className="logoimg" src={Mylogo} alt="" /></span> 
                    <h1>Portfolio</h1> 
                </a>
                <button className="navbar-toggler x collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto Nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>


                    </ul>
                </div>

            </nav>
      
        </div>
    )
}

export default Header

