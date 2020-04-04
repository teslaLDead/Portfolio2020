import React from "react";
import placeholder from './thumnail-placeholder.png';
import './BlogThumbnail.css';
//the data again will be populated from dynamic sources
export default function BlogThumbnail(){
    return(
        <div className="blog-thumbnail">
            <div>
                <img src={placeholder} alt="" />
            </div>
            <p className="bold">
                Font inspirations for portfolio pages
                to make it more awesome
            </p>
        </div>
    )
}