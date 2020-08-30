import React from "react";
import {Helmet} from "react-helmet";
import PortfolioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';
class Work extends React.Component{
    componentDidMount=()=>{
        // api call will have to be made here
        // the data from the api call will populate the portfolio viewers
    }
    render(){
        
          const  works=[
                {
                    "title":"UI/UX Design and Full Stack Development ",
                    "heading":"KodeGlobe: Digital Solutions",
                    "paragraphs":[
                        "Create a clean looking, attractive, and SEO friendly website from scratch. ",
                        "Helped to conceptualize, design, develop and deploy the website. Took it from an idea to the final product."
                    ],
                    "link_title":"KodeGlobe Wesbite",
                    "link_url":"https://www.kodeglobe.com/",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('./Assets/kodeglobe.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                },
                {
                    "title":"Frontend Development and Design",
                    "heading":"Social Issue Awareness Website",
                    "paragraphs":[
                        "Create a website for increasing awareness about depression. Designed and develoed cool animations and visuals.",
                        "Personal project for experimenting with new javascript features."
                    ],
                    "link_title":"Website Link",
                    "link_url":"https://talkaboutdepression.info",
                    "main_background":"linear-gradient(142deg, rgb(247, 37, 37) 16%, rgb(191, 21, 21) 58%) 35% 31% no-repeat padding-box padding-box transparent",
                    "image_url":require('./Assets/talkaboutdepression.png'),
                    "secondary_background":"linear-gradient(68deg, rgb(238, 51, 51) 0%, rgb(208, 29, 29) 102%) 0% 0% no-repeat padding-box padding-box transparent"
                },
                {
                    "title":"Frontend Development and Design",
                    "heading":"Gamedoora: Collaboration and Social Platform",
                    "paragraphs":[
                        "Designed a collaboration platform for game developers, animators and visual artists.",
                        "Helped suggest new features and ideas to improve the product. Developed various frontend components."
                    ],
                    "link_title":"See Design",
                    "link_url":"https://www.behance.net/gallery/96160011/Work-Collaboration-Platform",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('./Assets/gamedoora.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                },
                {
                    "title":"UI/UX Design",
                    "heading":"MereExams: College Admissions Made Easy",
                    "paragraphs":[
                        "Redesigned the entire website. Helped in making the product more user friendly.",
                        "Collaborated with the entire team to understand and create. Prototyped and iterated the designs."
                    ],
                    "link_title":"Work Showcase",
                    "link_url":"https://www.behance.net/gallery/96160011/Work-Collaboration-Platform",
                    "main_background":"linear-gradient(142deg, rgb(247, 37, 37) 16%, rgb(191, 21, 21) 58%) 35% 31% no-repeat padding-box padding-box transparent",
                    "image_url":require('./Assets/mereexams.png'),
                    "secondary_background":"linear-gradient(68deg, rgb(238, 51, 51) 0%, rgb(208, 29, 29) 102%) 0% 0% no-repeat padding-box padding-box transparent"
                }
            ];
        
            works.forEach(element => {
                // console.log(element)
            })
       
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