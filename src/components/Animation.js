import React,{useState} from "react";
import Fade from 'react-reveal/Fade';

export function FadeInHeading(props){
    const [maskState,setMaskState]= useState('active-left-mask')

    
    return(
        <div className={maskState}> 
                <Fade delay={props.delay} left duration={2000} onReveal={()=>{
                    setTimeout(() => {
                        setMaskState('')
                    }, 3000);
                    
                    }}>
                {props.children}
            </Fade>
            </div>
        
    )
}
