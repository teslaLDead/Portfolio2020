import React from "react";
import PortfolioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';

class Work extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="section-heading">
                      Work  
                    </div>
                    <h1>
                    Digital products    
                    <br/>
                    created with care.
                    </h1>
                    <p className="medium-font xl-line-height col-offset-3 col-1 col-m-offset-0 col-m-4"> 
                    Some of my work in various fields <br/> of IT. I like to explore ideas and try <br/> creating products I like.
                    </p>
                </header>
                <div>
                    {/* for loop will be inserted here to render the portfolio viewer for all the work */}
                    <PortfolioViewer />
                </div>
            </div>
        )
    }
}

export default Work;