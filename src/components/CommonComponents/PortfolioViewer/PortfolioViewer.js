import React from "react";
import './PortfolioViewer.css';
import portfolioImage from './kodeglobe header screenshot.png';
// thinking of populating this viewer with js file

//passing object in the function to populate the various fields
function PortfolioViewer(){
    return(
        <div className="position-relative">
            <div className="portfolio-main-background">
               
            </div>
            <div className="d-flex m-flex-direction-col-reverse">
                <div className="portfolio-description">
                    {/* <p>
                        01.
                    </p> */}
                     <h3 className="portfolio-work-heading">
                    UI/UX Design and Full Stack Development 
                </h3>
                    <p className="portfolio-case-heading">
                        Created clean <br/>
                        looking website <br/>
                        from scratch
                    </p>
                    <p className="portfolio-para">
                        We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.
                    </p>
                    <p className="portfolio-para">
                        We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.
                    </p>
                    <p><a href="" className="medium-font">Website Link</a></p>
                </div>
                <div className="portfolio-image-container">
                    <div>
                        <img src={portfolioImage} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PortfolioViewer;