import React from "react";
import placeholder from './thumnail-placeholder.png';
import './BlogThumbnail.css';
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import BlogThumbnailLoader from './BlogContentLoader';
//the data again will be populated from dynamic sources
export default function BlogThumbnail(props){
 
    if (props.data && props.data.title!=undefined)
   {
    return(
        <div className="blog-thumbnail">
                <Link to={`blog/${props.data.slug}`}>
            <div>

            <Fade top delay={200} distance="50px" duration={1500}>
            <div>
                <img src={props.data.coverImage.url} alt="" />
            </div>
            </Fade>
            <Fade top delay={600} distance="10px">
            <p className="bold">
               {props.data.title}
            </p>
            </Fade>
            </div>
                </Link>
        </div>
    )
}
else{
    console.log('yo')
    return(
        <BlogThumbnailLoader />
    )
}
}