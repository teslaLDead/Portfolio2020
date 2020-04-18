import React from "react";
import placeholder from './thumnail-placeholder.png';
import './BlogThumbnail.css';
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
//the data again will be populated from dynamic sources
export default function BlogThumbnail(props){
    return(
        <div className="blog-thumbnail">
                <Link to={props.url}>
            <div>

            <Fade top delay={200} distance="50px" duration={1500}>
            <div>
                <img src={placeholder} alt="" />
            </div>
            </Fade>
            <Fade top delay={600} distance="10px">
            <p className="bold">
                Font inspirations for portfolio pages
                to make it more awesome
            </p>
            </Fade>
            </div>
                </Link>
        </div>
    )
}