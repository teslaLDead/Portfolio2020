import React from "react";
import {Helmet} from "react-helmet";
import PortfolioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';

class Work extends React.Component{
    render(){
        return(
            <div className="dark-theme">
                <Helmet>
                    <title>Work | FullStack Develoment | UI/UX Design | Frontend & Backend</title>
                </Helmet>
                <header>
                    <div className="section-heading">
                      Work  
                    </div>
                    <h1 className="py-5">
                    Digital products    
                    <br/>
                    created with care.
                    </h1>
                    <p className="medium-font xl-line-height col-offset-3 col-1 col-m-offset-0 col-m-4"> 
                    Some of my work in various fields <br/> of IT. I like to explore ideas and try <br/> creating products I like.
                    </p>
                </header>
                <div className="my-5">
                    {/* for loop will be inserted here to render the portfolio viewer for all the work */}
                    <PortfolioViewer />
                    <PortfolioViewer className="portfolio-right"/>
                    <PortfolioViewer />
                </div>
            </div>
        )
    }
}

export default Work;