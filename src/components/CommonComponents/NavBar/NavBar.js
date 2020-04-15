import React from "react";
import MenuBtton from './MenuButton/MenuButton';
import {Link} from "react-router-dom";
import Menu from "./Menu";
import './NavBar.css';
// import logo from './logo.png';

function NavBar(props){
    return (
        <div id="navbar-container" className="d-flex justify-content-space-between">
            <div id="nav-logo">
                <Link to="/" >PK</Link>
            </div>
            <div onClick={()=>{
                props.toggleCurtain();
                props.toggleMenu();
                }}>
                <MenuBtton />
            </div>

            <Menu menuActive={props.menuActive} toggleCurtain={props.toggleCurtain} toggleMenu={props.toggleMenu}/>
        </div>
    );
}

export default NavBar;