import React from "react";


function Project(props){
    const {img, disc,codelink, demolink , videolink, color, frontdemo} =props.item; 
    return(
        <div className="ProjectContainer">
            <img src={img} />
            <div className="disc">
                <h1>Description</h1>
                {frontdemo?
                    <p >
                        {disc}
                        {demolink ===""? null:<a href={demolink} style={{color:'#7D0633'}}>FrontEnd-demo</a>}
                        
                        <a href={codelink} style={{color:'#7D0633'}}>code</a>
                        {videolink===""?null:<a href={videolink} style={{color:'#7D0633'}}>video</a>}
                    </p> 
                    :
                    <p >
                        {disc}
                        {demolink ===""? null:<a href={demolink} style={{color:'#7D0633'}}>demo</a>}
                        
                        <a href={codelink} style={{color:'#7D0633'}}>code</a>
                        {videolink===""?null:<a href={videolink} style={{color:'#7D0633'}}>video</a>}
                    </p> }
                
                
                
            </div>
        </div>
    )
}

export default Project