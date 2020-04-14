import React from "react";
import {Link} from "react-router-dom";
import resume from './Paritosh_Kumar_Resume.pdf';
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
                <div className="section-heading">
                    Contact
                </div>
                <div className="row">
                    <div className="col-3 col-m-4">
                        <h2>
                        I am looking for new <br/>
                        and exciting challenges.
                        </h2>
                        <a href="mailto:kumar.paritosh20@gmail.com?subject=Like%20to%20connect" ><b>kumar.paritosh20@gmail.com</b></a>
                    </div>
                    <div >
                        <div className="d-flex flex-column">
                            <Link to="/about" className="my-5">
                                <b>About</b>
                            </Link>
    
                            <Link to="/work" className="my-5">
                                <b>Work</b>
                            </Link>
    
                            <Link to="/blog" className="my-5">
                                <b>Blog</b>
                            </Link>
    
                            <a href={resume} className="my-5">
                                <b>Resume</b>
                            </a>
    
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <a href="https://github.com/teslaLDead" target="_blank" rel="noopener noreferrer" className="mr-5">Github</a>
                    <a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/" target="_blank" rel="noopener noreferrer" className="mx-5">LinkedIn</a>
                    <a href="https://www.behance.net/teslaldead" target="_blank" rel="noopener noreferrer" className="mx-5">Behance</a>
                    <a href="https://www.facebook.com/paritosh.kumar.20" target="_blank" rel="noopener noreferrer" className="mx-5">Facebook</a>
                    <a href="https://codepen.io/teslaLdead" target="_blank" rel="noopener noreferrer" className="mx-5">CodePen</a>
                </div>
                <div className="text-center">
                    <p className="dim-text font-size-small">Made with &#60;&#92;&#62; by Paritosh Kumar. Circa 2020.</p>
                </div>
    
            </div>
        )
    }
        
    

    
}

export default Footer;