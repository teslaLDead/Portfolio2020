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
                    <p>
                    Some of my work in various fields of IT. I like to explore ideas and try creating products I like.
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