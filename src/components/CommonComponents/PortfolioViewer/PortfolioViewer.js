import React from "react";
import './PortfolioViewer.css';
import portfolioImage from './kodeglobe header screenshot.png';
import Fade from "react-reveal/Fade";
// thinking of populating this viewer with js file

//passing object in the function to populate the various fields
function PortfolioViewer(props){

    console.log(props.data.image_url)

    

    return(
        <div className={`position-relative portfolio-container ${props.className}`}>
            <Fade left={!props.alt} right={props.alt}>
                <div className="portfolio-main-background" style={{
                    background:`${props.data.main_background}`
                }}> </div>
            </Fade>
            <div className="d-flex m-flex-direction-col-reverse">
                <div className="portfolio-description">
                    {/* <p>
                        01.
                    </p> */}
                    <Fade top distance={"50px"} delay={1000} >
                     <h3 className="portfolio-work-heading">
                    {props.data.title}
                    {/* {props.data.title} */}
                </h3>
                </Fade>
                <Fade top distance={"10px"} delay={1200} duration={1500}>
                    <p className="portfolio-case-heading">
                        {/* {props.data.heading} */}
                        {props.data.heading}
                    </p>
                    </Fade>

                    
                    <Fade top distance={"10px"} delay={1400} duration={1500}>
                    <p className="portfolio-para">
                        We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.
                    </p>
                    </Fade>
                    <Fade top distance={"10px"} delay={1600} duration={1500}>
                    <p className="portfolio-para">
                    
                        We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.
                    </p>
                    </Fade>
                    {/* {props.data.paragraphs} */}
                    <Fade top distance={"10px"} delay={1600}>
                <p><a href={props.link_url} className="medium-font">{props.data.link_title}</a></p>
                    </Fade>
                </div>
                <Fade left={!props.alt} right={props.alt} distance={"500px"} duration={2000} delay={1000}>
                <div className="portfolio-image-container"
                    style={{
                        background:`${props.data.secondary_background}`
                    }}
                >
                    <div>
                        <Fade left={!props.alt} right={props.alt} distance={"10px"} delay={1600} duration={2000}>
                            <img src={props.data.image_url} alt=""/>
                        </Fade>
                    </div>
                </div>
                </Fade>
            </div>
            
        </div>
    )
}

export default PortfolioViewer;