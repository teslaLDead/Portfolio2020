import React from "react";
import PortflioViewer from '../../CommonComponents/PortfolioViewer/PortfolioViewer';
import BlogThumbnail from "../../CommonComponents/BlogThumbnail/BlogThumbnail";
import techAdventurerIllustration from './assets/tech-adventurer illustration.svg';
import blogWritingIllustration from './assets/blog writing illustration.svg';
class Home extends React.Component{
    state={

    }

    render(){
        return(
        <div>
            <header className="hv-100 d-flex flex-column">
                <div className="section-heading">
                    Tech Adventurer
                </div>
                <h1 className="vertical-text-break lg-line-height">
                    <span>Passion for </span>
                    <span>creating</span>
                    <span>remarkable </span>
                    <span>digital products</span>
                </h1>
                <p className="medium-font xl-line-height col-offset-3 col-m-offset-0">
                    Creating and working on <br/>
                    innovative and eye-catching <br/>
                    solutions that try to solve <br/>
                    complex or simple problems.<br/>
                </p>
            </header>
            <div className="mb-100px">
                <div className="section-heading">
                    Introductions
                </div>
                <div className="row">
                    <div className="col-2 col-m-4">
                        <h2 className="py-5">
                        Hi. I am a <span className="text-highlight">designer</span> and a <span className="text-highlight">developer</span><br/>
                            I like to call myself a <span className="color-dark">'Tech Adventurer'.</span>
                        </h2>
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
                    <div className="col-2 col-m-4 d-flex justify-content-center">
                        <img src={techAdventurerIllustration} alt=""/>
                    </div>
                </div>
            </div>
            {/* porject section */}
            <div className="mb-200px">
                <div className="section-heading">
                    Notable Projects 
                </div>
                <h2>
                    Thinking and creating innovative <br/>
                    solutions for big and small problems.
                </h2>
            </div>
            <div className="mb-200px">
            <PortflioViewer />
            </div>
            

            {/* thoughts and ideas section */}
            <div className="bg-white light-theme">
                <div>
                    {/* left side of the section and right side will be used for illustration */}
                    <div className="section-heading">
                            Thoughts and Ideas
                    </div>
                    <h2>
                        Articles and blog about<br/>
                        work and technology
                    </h2>
                    <div className="row align-items-center">
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
                            <img src={blogWritingIllustration} alt="" />
                        </div>
                    </div>
                </div>
                <div className="light-theme">
                    <div className="section-heading">
                        Know me more
                    </div>
                    <div>
                        {/* next page links */}
                        <div>
                            <a href="">
                                <p>About</p>
                                <p>See what I can do</p>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <p>Work</p>
                                <p>See what I have done</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;