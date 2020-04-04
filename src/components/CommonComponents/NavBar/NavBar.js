import React from "react";
import MenuBtton from './MenuButton/MenuButton';
import {Link} from "react-router-dom"
import './NavBar.css';

function NavBar(){
    return (
        <div id="navbar-container" className="d-flex justify-content-space-between">
            <div id="nav-logo">
                <Link to="/" >PK</Link>
            </div>
            <div>
                <MenuBtton />
            </div>
        </div>
    );
}

export default NavBar;