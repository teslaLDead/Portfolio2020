import React from "react";
import './BackgroundCurtain.css';
function BackgroundCurtain(props){
    
    let curtainclassName=props.curtainState;
    console.log(curtainclassName)
    return (
      
        <div id="background" className={`${curtainclassName}-curtain`}>
        
        <div className="left-border"></div>

        
        <div className="container">
            <div className="curtain"></div>
            <div className="curtain"></div>
            <div className="curtain"></div>
            <div className="curtain"></div>
        </div>
        <div className="right-border"></div>
        
      </div>
    )
}

export default BackgroundCurtain;