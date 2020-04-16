import React from "react";
import {Helmet} from "react-helmet";
import resume from './Paritosh_Kumar_Resume.pdf';
import fullstack from './svg_assets/fullstack.svg';
import frontend from './svg_assets/frontend.svg';
import backend from './svg_assets/backend.svg';
import uiux from './svg_assets/uiux.svg';

// tech asset imports 

import adobexd from "./tech assets/adobexd.png";
import ai from "./tech assets/ai.png";
import aws from "./tech assets/aws.png";
import axure from "./tech assets/axure.png";
import django from "./tech assets/django.png";
import gcp from "./tech assets/gcp.png";
import graphql from "./tech assets/graphql.png";
import indesign from "./tech assets/indesign.png";
import invision from "./tech assets/invision.png";
import marvelapp from "./tech assets/marvelapp.png";
import nodejs from "./tech assets/nodejs.png";
import ps from "./tech assets/ps.png";
import python from "./tech assets/python.png";
import react from "./tech assets/react.png";
// import  from "./tech assets/.png";
// import  from "./tech assets/.png";




class About extends React.Component{

   

    render(){
        // this.props.toggleCurtain();
    return(
        <div className="dark-theme">
            <Helmet>
                <title>About Paritosh Kumar</title>
            </Helmet>
            <header className="hv-100">
                <div className="section-heading">
                    About
                </div>
                <h1 className="py-5">
                    Creative designer <br/>
                    and passionate developer.
                </h1>
            </header>
            <div className="my-5">
                <div className="section-heading my-5">
                    Areas of Work
                </div>  
                
                <div className="row">
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Full Stack
                        </h3>
                        <div className="py-5">
                            <img src={fullstack} alt="full stack" />
                        </div>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Frontend
                        </h3>
                        <div className="py-5">
                            <img src={frontend} alt="frontend" />
                        </div>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            UI/UX Design
                        </h3>
                        <div className="py-5">
                            <img  src={uiux} alt="u i u x design" />
                        </div>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Backend
                        </h3>
                        <div className="py-5">
                            <img  src={backend} alt="backend" />
                        </div>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="bg-white light-theme py-lg-5 my-lg-100px">
                {/* white background section  */}
                <div className="section-heading py-5 my-5">
                    Tech Explored
                </div>
                <div className="row ">
                    {/* flex blox for dev and design skills images */}
                    <div className="col-2 col-m-4">
                        <p className="bold">
                            Development
                        </p>
                        <div className="row tech-image-grid">
                            {/* image grid */}
                            <div>
                                <img title="ReactJs" src={react} alt="" />
                            </div>
                            <div>
                                <img title="Node.Js" src={nodejs} alt="" />
                            </div>
                            <div>
                                <img title="Django" src={django} alt="" />
                            </div>
                            <div>
                                <img title="Python" src={python} alt="" />
                            </div>
                            <div>
                                <img title="Amazon Web Services" src={aws} alt="" />
                            </div>
                            <div>
                                <img title="Google Cloud Platform" src={gcp} alt="" />
                            </div>
                            <div>
                                <img title="GraphQL" src={graphql} alt="" />
                            </div>
                            {/* <div>
                                <img title="" src={python} alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-2 col-m-4">
                        <p className="bold">
                            Design
                        </p>
                        <div className="row tech-image-grid">
                            {/* image grid */}
                            <div>
                                <img title="AdobeXD" src={adobexd} alt="" />
                            </div>
                            <div>
                                <img title="Adobe Photoshop" src={ps} alt="" />
                            </div>
                            <div>
                                <img title="Adobe Illustrator" src={ai} alt="" />
                            </div>
                            <div>
                                <img title="Adobe Indesign" src={indesign} alt="" />
                            </div>
                            <div>
                                <img title="InvisionApp" src={invision} alt="" />
                            </div>
                            <div>
                                <img title="AxureRP" src={axure} alt="" />
                            </div>
                            <div>
                                <img title="MarvelApp" src={marvelapp} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 mb-lg-100px">
                <div className="section-heading">
                    Breif Overview
                </div>
                <div className="row my-5 py-5">
                    {/* education row flex-row*/}
                    <div className="col-1 col-m-4">
                        <h2>Education</h2>
                    </div>
                    <div className="col-1 col-m-4">
                        <p>
                            <span className="bold">Integrated Post Graduate (M.Tech + B.Tech) <br/></span>
                            <span className="medium-font">Information Technology (2015 - 2020)</span>
                        </p>
                        <div>
                            <a href="https://www.iiitm.ac.in/index.php/en/" target="_blank" className="bold">IIIT Gwalior</a>
                        </div>
                    </div>
                    <div className="col-offset-1 col-m-offset-0">
                        <p className="section-heading">
                           <b> Coursework</b>
                        </p>
                        <ul>
                            <li><p>Data Structures & Algo</p></li>
                            <li><p>Object Oriented Programming</p></li>
                            <li><p>Database Design and Management</p></li>
                            <li><p>Systems Analysis and Design</p></li>
                            <li><p>Cloud Computing</p></li>
                        </ul>
                    </div>
                </div>
                <div className="row my-5 py-5">
                    {/* education row flex-row*/}
                    <div className="col-1 col-m-4">
                        <h2>Profession</h2>
                    </div>
                    <div className="col-1 col-m-4">
                        <p className="bold">
                            Developer and Designer
                        </p>
                        <p className="my-5">
                            Worked as an intern in various organizations. 
                            Did professional freelancing work as well.
                        </p>
                        <p className="my-5"> 
                            About to graduate college.
                        </p>
                        <p className="my-5">
                            Currently looking for <span className="bold">full time</span> opportunities <br/> in awesome organizations.
                        </p>
                        <div className="my-5 py-5">
                            <a href={resume} className="bold">Download Resume</a>
                        </div>
                    </div>
                    <div className="col-offset-1 col-m-offset-0">
                        <p className="section-heading">
                        <b>Roles Interested</b>
                        </p>
                        <ul>
                            <li><p>Software Developer/Engineer</p></li>
                            <li><p>Frontend Engineer</p></li>
                            <li><p>Backend Engineer</p></li>
                            <li><p>UI/UX Designer</p></li>
                            <li><p>Full Stack Developer</p></li>
                        </ul>
                        <div>
                            <a href="mailto:kumar.paritosh20@gmail.com?subject=Like%20to%20connect" className="bold">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default About;