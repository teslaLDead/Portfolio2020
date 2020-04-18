import React from 'react';
import ScrollMagic from 'scrollmagic';

class TextFadeIn extends React.Component{
  constructor(props){
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount=()=>{
    new ScrollMagic.Scene({
      triggerEl:".fade-in-text",duration:150
    }).setPin('.fade-in-text')
    .addTo(controller);
  }
}

export default TextFadeIn;