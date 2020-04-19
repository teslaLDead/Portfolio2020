import React from "react";
import BlogCategories from './BlogCategories.json';
import Fade from 'react-reveal/Fade';
const blogCat=BlogCategories.blogCategories;
export default function BlogCategoryNav(props) {
    console.log(BlogCategories)
    
    return(
        
        <ul>
            {blogCat.map((s,index)=>(<li className="mb-5 medium-font">
            <Fade top delay={(index+1)*500} distance={"50px"} ><a href="">{s}</a></Fade>
            </li>))}
        </ul>
    )
}