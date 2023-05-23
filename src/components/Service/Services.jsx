import React from "react";
import Card from "./Card";
import { SiHiveBlockchain } from "react-icons/si"
import { GiArtificialIntelligence } from "react-icons/gi"
import { FaLaptopCode } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"



function Services(){
    return(
        <div className="servicContainer">
            <h4>My <span className="green">serveces</span></h4>
            <h1>What I do</h1>
            <div className="Cards row">
                <div className="col-lg-4 col-md-6">
                    <Card 
                    Icon={SiHiveBlockchain}
                    title={"Blockchain and DAPP development"}
                    disc = {"I know solidity and truffle framework as well as Motoko for ICP blockchain and I am learing more and more in this field."}
                    />
                </div> 
                
                <div className="col-lg-4 col-md-6">
                    <Card 
                    Icon={FaLaptopCode}
                    title={"Full stack web development"}
                    disc = {"For frontend I know react, bootstrap and taiwindcss and as a backend developer I work with express, mongoda and mysql, and also I can handle authentication and security issues."}
                    />
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <Card 
                    Icon={GiArtificialIntelligence}
                    title={"Computer Vision and NLP"}
                    disc = {"I have a deep understanding about natural language proccessing and coputer vision I know about preproccessing, tokenization, convolutional networks, object detection and ... , and I know tensorflow , pytorch and trax frameworks."}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Services