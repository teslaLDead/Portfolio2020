import React from "react";
// import MenuButtonIcon from './Menu Button.svg';

function MenuButton(props){

    var menuText="menu";
    var transform1="translate(0 10)";
    var transform2="translate(0 13)";
    var transform3="translate(0 18)";
    if (props.menuActive){
        menuText="close";
        
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" className="pointer">

<g id="Menu_Button" data-name="Menu Button" >
<text id="menu"  fill="#fff" font-size="12" transform={transform1} font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0" style={{transformOrigin:"center",transition:"all 0.3s ease"}}>{menuText}</tspan></text>
  <rect id="Rectangle_1" data-name="Rectangle 1" transform={transform2} width="35" height="2"  fill="#fff" />
  <rect id="Rectangle_3" data-name="Rectangle 3" transform={transform3} width="35" height="2"  fill="#fff" style={{transformOrigin:"center",transition:"all 0.3s ease"}}/>
   
</g>
</svg>
        </div>
    )
}

export default MenuButton;