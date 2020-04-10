import React from "react";
import './BackgroundCurtain.css';
function BackgroundCurtain(props){
    
    let curtainClass=props.curtainState;
    console.log(curtainClass)
    return (
      
        <div id="background" class={`${curtainClass}-curtain`}>
        
        <div class="left-border"></div>

        
        <div class="container">
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
        </div>
        <div class="right-border"></div>
        
      </div>
    )
}

export default BackgroundCurtain;