import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import Fade from "react-reveal/Fade";
function Menu(props){

    // default menuClass is menu-closed
    var menuClass="menu-closed";

    if (props.menuActive){
        menuClass="menu-open"
    }
    else{
        menuClass="menu-closed"
    }

    return(
        <div id="menu" className={menuClass} onClick={()=>{
            props.toggleMenu();
            props.toggleCurtain();
        }}>
            <div id="nav-links-container" >
                {/* navigation links container */}
                <div>
                    <Fade top distance="5px" delay={200}>
                    <NavLink to="/about"  className="menu-links" activeClassName="active-navlink">About</NavLink>
                    </Fade>
                </div>
                <div>
                    <Fade top distance="5px" delay={300}>
                        <NavLink to="/work"  className="menu-links" activeClassName="active-navlink">Work</NavLink>
                    </Fade>
                </div>
                <div>
                    <Fade top distance="5px" delay={400}>
                        <NavLink to="/blog"  className="menu-links" activeClassName="active-navlink">Blog</NavLink>
                    </Fade>
                </div>
                <div>
                    <Fade top distance="5px" delay={500}>
                        <NavLink to="/contact"  className="menu-links" activeClassName="active-navlink">Contact</NavLink>
                    </Fade>
                </div>
            </div>
            <div>
                <ul className="d-flex">
                    <li>
                        <Fade delay={200} left distance="5px"><a href="https://github.com/teslaLDead" target="_blank" rel="noopener noreferrer" className="mr-5">Github</a></Fade>
                    </li>
                    <li>
                        <Fade delay={400} left distance="5px"><a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/" target="_blank" rel="noopener noreferrer" className="mx-5">LinkedIn</a></Fade>
                    </li>
                    <li>
                        <Fade delay={600} left distance="5px"><a href="https://www.behance.net/teslaldead" target="_blank" rel="noopener noreferrer" className="mx-5">Behance</a></Fade>
                    </li>
                    <li>
                        <Fade delay={800} left distance="5px"><a href="https://www.facebook.com/paritosh.kumar.20" target="_blank" rel="noopener noreferrer" className="mx-5">Facebook</a></Fade>
                    </li>
                    <li>
                        <Fade delay={1000} left distance="5px"><a href="https://codepen.io/teslaLdead" target="_blank" rel="noopener noreferrer" className="mx-5">CodePen</a></Fade>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Menu;