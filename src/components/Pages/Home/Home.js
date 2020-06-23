import React from "react";
import {Helmet} from "react-helmet";
import PortfolioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';
import BlogThumbnail from "../../CommonComponents/BlogThumbnail/BlogThumbnail";
import techAdventurerIllustration from './assets/tech-adventurer illustration.svg';
import blogWritingIllustration from './assets/blog writing illustration.svg';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import {FadeInHeading} from '../../Animation';
// import {Spring} from 'react-spring/renderprops';
// import TextFadeIn from '../../CommonComponents/AnimationComponents/TextAnimations/TextFadeIn';
class Home extends React.Component{
    state={
        // this state is for the class of left mask that is hiding the reveal 
        leftMask:'active-left-mask'
    }

    
// this is for handling the z-index class of the left mask that was put in 
    closeLeftMask=()=>{
        setTimeout(() => {
            this.setState({
                leftMask:''
            })
        }, 5000);
        
    }

    render(){
        return(
        <div className="dark-theme">
            <header className="hv-100 d-flex flex-column">
                <Helmet>
                    <title>Paritosh Kumar - Full Stack Developer and UI/UX Designer</title>
                </Helmet>
                <Fade>
                <div className="section-heading fade-in-text">
                    Tech Adventurer
                </div>
                </Fade>
                
                <FadeInHeading delay={800}>

                
                
                <h1 className="vertical-text-break lg-line-height">
                <span>Passion for </span>
                <span>creating</span>
                <span>remarkable </span>
                <span>digital products</span>
            </h1>
            
            </FadeInHeading>
                
                {/* </Spring> */}
                {/* </TextFadeIn > */}
                <Fade delay={1500}>
                <p className="medium-font xl-line-height col-offset-3 col-m-offset-0">
                    Creating and working on <br/>
                    innovative and eye-catching <br/>
                    solutions that try to solve <br/>
                    complex or simple problems.<br/>
                </p>
                </Fade>
            </header>
            <div className="mb-100px">
                <Fade>
                <div className="section-heading">
                    Introductions
                </div>
                </Fade>
                <div className="row">
                    <div className="col-2 col-m-4">
                    <Fade delay={800}>
                        <h2 className="py-5">
                        Hi. I am a <span className="text-highlight">designer</span> and a <span className="text-highlight">developer</span><br/>
                            I like to call myself a <span className="color-dark">'Tech Adventurer'.</span>
                        </h2>
                        </Fade>
                        <Fade delay={1500} top distance={"10px"} duration={1500} cascade>
                            <div>
                            <p className="py-5">
                            Passionate software developer with a zealousness for good <br/>
                            designs. Interested in working on solutions for complex <br/>
                            problems and creating innovational digital products. 
                        </p>
                        <p className="py-5">
                            My current area of interest and work are <b>UI/UX Design</b> and <br/>
                            <b>Full Stack Development. </b>
                        </p>
                            </div>
                        
                        </Fade>
                        
                    </div>
                    
                    <div  className="col-2 col-m-4 d-flex justify-content-center">
                    <Fade delay={800} duration={2000}>
                        <img src={techAdventurerIllustration} alt=""/>
                        </Fade>
                    </div>
                    
                </div>
            </div>
            {/* porject section */}
            <div className="mb-200px">
                <Fade>
                <div className="section-heading">
                    Notable Projects 
                </div>
                </Fade>
                {/* <TextFadeIn> */}
                <Fade top cascade duration={1500}>
                <h2 className="my-5">
                    Thinking and creating innovative <br/>
                    solutions for big and small problems.
                </h2>
                </Fade>
                {/* </TextFadeIn> */}
            </div>
            <div className="mb-200px" style={{zIndex:"0",position:"relative"}}>
            <PortfolioViewer data= {{
                    "title":"UI/UX Design and Full Stack Development ",
                    "heading":"KodeGlobe: Digital Solutions",
                    "paragraphs":[
                        "Create a clean looking, attractive, and SEO friendly website from scratch. ",
                        "Helped to conceptualize, design, develop and deploy the website. Took it from an idea to the final product."
                    ],
                    "link_title":"KodeGlobe Wesbite",
                    "link_url":"https://www.kodeglobe.com/",
                    "main_background":"transparent linear-gradient(236deg, #366AF8 0%, #2237C1 100%) 0% 0% no-repeat padding-box",
                    "image_url":require('../Work/Assets/kodeglobe.png'),
                    "secondary_background":"transparent linear-gradient(242deg, #5C90F5 0%, #006FFF 100%) 0% 0% no-repeat padding-box"
                }}/>
            </div>
            

            {/* thoughts and ideas section */}
            <div className="bg-white light-theme">
                <div className="position-relative">
                    {/* left side of the section and right side will be used for illustration */}
                    <Fade>
                    <div className="section-heading py-5">
                            Thoughts and Ideas
                    </div>
                    </Fade>
                    <Fade delay={200}>
                    <h2>
                        Articles and blog about<br/>
                        work and technology
                    </h2>
                    </Fade>
                    <div className="row align-items-center">
                        <Fade cascade delay={800}>
                        <div className="col-2 col-m-4">
                            
                            <div className="row">
                                <div className="col-2 col-m-4">
                                    <BlogThumbnail /> 
                                </div>
                                <div className="col-2 col-m-4">
                                <BlogThumbnail />
                                </div>
                                
                            </div>
                        </div>
                        {/* illustration will be here */}
                        <div className="col-2 col-m-4 d-flex justify-content-center">
                            {/* this illustration will have hover effect of something */}
                            <Fade delay={800} duration={1500}>
                            <img src={blogWritingIllustration} alt="" />
                            </Fade>
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="py-5">
                    <div className="section-heading my-5">
                        Know me more
                    </div>
                    <div className="row my-5">
                        {/* next page links */}
                        <div className="detailed-nav-link col-1 col-m-2">
                            <Link to="/about">
                                <p>About</p>
                                <p>See what I can do</p>
                            </Link>
                        </div>
                        <div className="detailed-nav-link col-1 col-m-2">
                            <Link to="/work">
                                <p>Work</p>
                                <p>See what I have done</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;