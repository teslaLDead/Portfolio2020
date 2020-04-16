import React from "react";
import placeholder from './thumnail-placeholder.png';
import './BlogThumbnail.css';
import {Link} from "react-router-dom";
//the data again will be populated from dynamic sources
export default function BlogThumbnail(props){
    return(
        <div className="blog-thumbnail">
                <Link to={props.url}>
            <div>

            
            <div>
                <img src={placeholder} alt="" />
            </div>
            <p className="bold">
                Font inspirations for portfolio pages
                to make it more awesome
            </p>
            </div>
                </Link>
        </div>
    )
}