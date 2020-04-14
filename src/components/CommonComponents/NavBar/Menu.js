import React from "react";
import {Link} from "react-router-dom";
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
        <div id="menu" className={menuClass}>
            <div id="nav-links-container">
                {/* navigation links container */}
                <div>
                    <Link to="/about" className="menu-links">About</Link>
                </div>
                <div>
                    <Link to="/work" className="menu-links">Work</Link>
                </div>
                <div>
                    <Link to="/blog" className="menu-links">Blog</Link>
                </div>
                <div>
                    <Link to="/contact" className="menu-links">Contact</Link>
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