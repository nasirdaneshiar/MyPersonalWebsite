import React from "react";
import Card from "./Card";
import { SiHiveBlockchain } from "react-icons/si"
import { GiArtificialIntelligence } from "react-icons/gi"
import { FaLaptopCode } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import { Slide , Fade} from "react-awesome-reveal";



function Services(){
    return(
        <div className="servicContainer" id="services">
            <Slide direction="down">
            <h4>My <span className="green">services</span></h4>
            <h1>What I do</h1>
            </Slide>
            <div className="Cards row">
                
                <div className="col-lg-4 col-md-6">
                    <Slide direction="left">
                        <Card 
                        Icon={SiHiveBlockchain}
                        title={"Blockchain and DAPP development"}
                        disc = {"Solidity, truffle ,hardhat, foundry for ethereum blockchain development as well as Motoko for ICP blockchain."}
                        />
                    </Slide>
                </div> 
                
                
                
                <div className="col-lg-4 col-md-6">
                    <Fade> 
                        <Card 
                        Icon={FaLaptopCode}
                        title={"Full stack web development"}
                        disc = {"For frontend I know react, bootstrap and taiwindcss and as a backend developer I work with express, mongodb and mysql, and also I can handle authentication and security issues."}
                        />
                    </Fade>
                </div>
               

                
               
                <div className="col-lg-4 col-md-6">
                    <Slide direction="right">
                        <Card 
                        Icon={GiArtificialIntelligence}
                        title={"Computer Vision and NLP"}
                        disc = {"I have a deep understanding about natural language proccessing and coputer vision I know about preproccessing, tokenization, convolutional networks, object detection and ... , and I know tensorflow , pytorch and trax frameworks."}
                        />
                    </Slide> 
                </div>
                
                
            </div>
        </div>
    )
}

export default Services