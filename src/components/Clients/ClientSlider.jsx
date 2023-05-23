import React from 'react'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai"

const ClientSlider = (props) => {
    const {name, position, img_url, stars,disc}=props.items;
    return (
        <div className="clientslideContainer">
            <div className='headtestim'>
                <span className='quote'><IoIosQuote/></span>
                {Array(stars).fill().map((_,i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar />
                    </span>
                ))}
            
            </div>
            <p className='bodytestim'>
                {disc}
            </p>
            <div className="footertestim">
                <img src={img_url} alt={name} />
                <div className='details'>
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ClientSlider