import React from "react";
import {Helmet} from "react-helmet";
import PortfolioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';
import data from './data.json';
class Work extends React.Component{
    componentDidMount=()=>{
        // api call will have to be made here
        // the data from the api call will populate the portfolio viewers
    }
    render(){
        
          const  works=[
                {
                    "title":"UI/UX Design and Full Stack Development ",
                    "heading":"Created clean looking website for KodeGlobe",
                    "paragraphs":[
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.",
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks."
                    ],
                    "link_title":"KodeGlobe Wesbite",
                    "link_url":"https://www.kodeglobe.com/",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('./Assets/kodeglobe.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                },
                {
                    "title":"Frontend Development and Design",
                    "heading":"Depression awareness website",
                    "paragraphs":[
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.",
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks."
                    ],
                    "link_title":"Website Link",
                    "link_url":"https://talkaboutdepression.info",
                    "main_background":"linear-gradient(142deg, rgb(247, 37, 37) 16%, rgb(191, 21, 21) 58%) 35% 31% no-repeat padding-box padding-box transparent",
                    "image_url":require('./Assets/talkaboutdepression.png'),
                    "secondary_background":"linear-gradient(68deg, rgb(238, 51, 51) 0%, rgb(208, 29, 29) 102%) 0% 0% no-repeat padding-box padding-box transparent"
                },
                {
                    "title":"Frontend Development and Design",
                    "heading":"Gamedoora: Collaboration Platform",
                    "paragraphs":[
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.",
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks."
                    ],
                    "link_title":"See Design",
                    "link_rul":"https://www.behance.net/gallery/96160011/Work-Collaboration-Platform",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('./Assets/gamedoora.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                },
                {
                    "title":"UI/UX Design",
                    "heading":"Mereexams: College Admissions Made Easy",
                    "paragraphs":[
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks.",
                        "We create a platform to centralizing the moderation of homogeneous and heterogeneous networks."
                    ],
                    "link_title":"Work Description",
                    "link_url":"https://www.behance.net/gallery/96160011/Work-Collaboration-Platform",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('./Assets/mereexams.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                }
            ]
        
        
       
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
                    <PortfolioViewer 
                    data={works[0]}
                    />
                    <PortfolioViewer 
                     data={works[1]}
                    className="portfolio-right" alt/>
                    <PortfolioViewer 
                    data={works[2]}
                    />
                    <PortfolioViewer 
                    data={works[3]}
                    className="portfolio-right" alt
                    />
                </div>
            </div>
        )
    }
}

export default Work;