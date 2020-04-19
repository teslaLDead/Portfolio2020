import React from "react";
import {Link} from "react-router-dom";
import resume from './Paritosh_Kumar_Resume.pdf';
import Fade from 'react-reveal/Fade';
import { FadeInHeading } from "../../Animation";
// import {FadeInHeading} from '../../Animation';
// import { render } from "@testing-library/react";


 const Footer=(props)=>
 {

    if (window.location.pathname=="/contact"){
       return(
           <div className="d-none"></div>
       )
    }
    
    else{
        return(
            <div className="py-5 dark-theme">
                <Fade>
                <div className="section-heading">
                    Contact
                </div>
                </Fade>
                
                <div className="row">
                <div className="col-3 col-m-4">
                <FadeInHeading>
                    <div>
                        <h2>
                        I am looking for new <br/>
                        and exciting challenges.
                        </h2>
                        <a href="mailto:kumar.paritosh20@gmail.com?subject=Like%20to%20connect" ><b>kumar.paritosh20@gmail.com</b></a>
                        </div>
                    </FadeInHeading>
                    </div>
                    <div>
                        
                        <div className="d-flex flex-column">
                            <div  className="my-5">
                                <Fade top distance={"50px"} delay={200}>    
                                <Link to="/about" >
                                    <b>About</b>
                                </Link>
                                </Fade>
                            </div>
                            <div  className="my-5">
                                <Fade top distance={"50px"} delay={400}>    
                                <Link to="/work" >
                                    <b>Work</b>
                                </Link>
                                </Fade>
                            </div>
                            <div  className="my-5">
                                <Fade top distance={"50px"} delay={600}>    
                                <Link to="/blog" >
                                    <b>Blog</b>
                                </Link>
                                </Fade>
                            </div>
                            <div  className="my-5">
                                <Fade top distance={"50px"} delay={800}>    
                                <a href={resume} >
                                    <b>Resume</b>
                                </a>
                                </Fade>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
                <div className="row my-5">
                    <Fade left distance={"50px"} delay={500}>
                        <a href="https://github.com/teslaLDead" target="_blank" rel="noopener noreferrer" className="mr-5">Github</a>
                    </Fade>
                    <Fade left distance={"50px"} delay={800}>
                        <a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/" target="_blank" rel="noopener noreferrer" className="mx-5">LinkedIn</a>
                    </Fade>
                    
                    <Fade left distance={"50px"} delay={1300}><a href="https://www.behance.net/teslaldead" target="_blank" rel="noopener noreferrer" className="mx-5">Behance</a></Fade>
                    <Fade left distance={"50px"} delay={1500}><a href="https://www.facebook.com/paritosh.kumar.20" target="_blank" rel="noopener noreferrer" className="mx-5">Facebook</a></Fade>
                    <Fade left distance={"50px"} delay={1800}><a href="https://codepen.io/teslaLdead" target="_blank" rel="noopener noreferrer" className="mx-5">CodePen</a></Fade>
                </div>
               
                <div className="text-center">
                    <p className="dim-text font-size-small">Made with &#60;&#92;&#62; and &hearts; by Paritosh Kumar. Circa 2020.</p>
                </div>
    
            </div>
        )
    }
        
    

    
}

export default Footer;