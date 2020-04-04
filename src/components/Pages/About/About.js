import React from "react";
import resume from './Paritosh_Kumar_Resume.pdf';

export default function About(){
    return(
        <div>
            <header className="hv-100">
                <div className="section-heading">
                    About
                </div>
                <h1>
                    Creative designer <br/>
                    and passionate developer.
                </h1>
            </header>
            <div>
                <div className="section-heading">
                    Areas of Work
                </div>
                
                <div className="row">
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Full Stack
                        </h3>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Frontend
                        </h3>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            UI/UX Design
                        </h3>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div className="col-1 col-m-4 ">
                        <h3>
                            Backend
                        </h3>
                        <p className="pr-2">
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="bg-white light-theme">
                {/* white background section  */}
                <div className="section-heading">
                    Tech Explored
                </div>
                <div className="row ">
                    {/* flex blox for dev and design skills images */}
                    <div className="col-2 col-m-4">
                        <p className="bold">
                            Development
                        </p>
                        <div>
                            {/* image grid */}
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-m-4">
                        <p className="bold">
                            Design
                        </p>
                        <div>
                            {/* image grid */}
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-heading">
                    Breif Overview
                </div>
                <div className="row">
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
                            <a href="https://www.iiitm.ac.in/index.php/en/" className="bold">IIIT Gwalior</a>
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
                <div className="row">
                    {/* education row flex-row*/}
                    <div className="col-1 col-m-4">
                        <h2>Profession</h2>
                    </div>
                    <div className="col-1 col-m-4">
                        <p className="bold">
                            Developer and Designer
                        </p>
                        <p>
                            Worked as an intern in various organizations. 
                            Did professional freelancing work as well.
                        </p>
                        <p> 
                            About to graduate college.
                        </p>
                        <p>
                            Currently looking for <span className="bold">full time</span> opportunities <br/> in awesome organizations.
                        </p>
                        <div>
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