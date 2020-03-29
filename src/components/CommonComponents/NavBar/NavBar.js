import React from "react";
import MenuBtton from './MenuButton/MenuButton';
import './NavBar.css';

function NavBar(){
    return (
        <div className="d-flex justify-content-space-between">
            <div id="nav-logo">
                <a href="" >PK</a>
            </div>
            <div>
                <MenuBtton />
            </div>
        </div>
    );
}

export default NavBar;