import React from "react";

function Card(props){
    const {Icon, disc, title} = props;
    return(
        <div className="CardContainer">
            <span><Icon/></span>
            <h1>{title}</h1>
            <p>{disc}</p>
        </div>
    )
}

export default Card