import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
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
                    <NavLink to="/about"  className="menu-links" activeClassName="active-navlink">About</NavLink>
                </div>
                <div>
                    <NavLink to="/work"  className="menu-links" activeClassName="active-navlink">Work</NavLink>
                </div>
                <div>
                    <NavLink to="/blog"  className="menu-links" activeClassName="active-navlink">Blog</NavLink>
                </div>
                <div>
                    <NavLink to="/contact"  className="menu-links" activeClassName="active-navlink">Contact</NavLink>
                </div>
            </div>
            <div>
                <ul className="d-flex">
                    <li>
                        <a href="https://github.com/teslaLDead" target="_blank" rel="noopener noreferrer" className="mr-5">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/" target="_blank" rel="noopener noreferrer" className="mx-5">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/teslaldead" target="_blank" rel="noopener noreferrer" className="mx-5">Behance</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/paritosh.kumar.20" target="_blank" rel="noopener noreferrer" className="mx-5">Facebook</a>
                    </li>
                    <li>
                        <a href="https://codepen.io/teslaLdead" target="_blank" rel="noopener noreferrer" className="mx-5">CodePen</a>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Menu;