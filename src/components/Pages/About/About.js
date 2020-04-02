import React from "react";

export default function About(){
    return(
        <div>
            <header>
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
                
                <div className="d-flex">
                    <div>
                        <h3>
                            Full Stack
                        </h3>
                        <p>
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div>
                        <h3>
                            Frontend
                        </h3>
                        <p>
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div>
                        <h3>
                            UI/UX Design
                        </h3>
                        <p>
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                    <div>
                        <h3>
                            Backend
                        </h3>
                        <p>
                        Analyzing the requirements of the project thoroughly. Delivering impeccable designs that capture the attention of the user with user-friendliness and rational design creation.
                        </p>
                    </div>
                </div>
                
            </div>
            <div>
                {/* white background section  */}
                <div className="section-heading">
                    Tech Explored
                </div>
                <div>
                    {/* flex blox for dev and design skills images */}
                    <div>
                        <p>
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
                    <div>
                        <p>
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
                <div>
                    {/* education row flex-row*/}
                    <div>
                        <p>Education</p>
                    </div>
                    <div>
                        <p>
                            Integrated Post Graduate (M.Tech + B.Tech) <br/>
                            Information Technology (2015 - 2020)
                        </p>
                        <div>
                            <a href="">IIIT Gwalior</a>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Coursework
                        </h3>
                        <ul>
                            <li>Data Structures & Algo</li>
                            <li>Object Oriented Programming</li>
                            <li>Database Design and Management</li>
                            <li>Systems Analysis and Design</li>
                            <li>Cloud Computing</li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* education row flex-row*/}
                    <div>
                        <p>Profession</p>
                    </div>
                    <div>
                        <p>
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
                            Currently looking for full time opportunities <br/> in awesome organizations.
                        </p>
                        <div>
                            <a href="">Download Resume</a>
                        </div>
                    </div>
                    <div>
                        <h3>
                        Roles Interested
                        </h3>
                        <ul>
                            <li>Software Developer/Engineer</li>
                            <li>Frontend Engineer</li>
                            <li>Backend Engineer</li>
                            <li>UI/UX Designer</li>
                            <li>Full Stack Developer</li>
                        </ul>
                        <div>
                            <a href="mailto" >Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}