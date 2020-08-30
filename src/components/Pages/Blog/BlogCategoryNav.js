import React from "react";
import BlogCategories from './BlogCategories.json';
import Fade from 'react-reveal/Fade';
import {NavLink} from "react-router-dom";
const blogCat=BlogCategories.blogCategories;
export default function BlogCategoryNav(props) {
    console.log(BlogCategories)
    
    return(
        
        <ul>
            {blogCat.map((s,index)=>(<li className="mb-5 medium-font">
            <Fade top delay={(index+1)*500} distance={"50px"} ><NavLink onClick={
                () => props.blogCategoryChange ? props.blogCategoryChange(s) : ""
            } to={`/blog/category/${s.split(" ").join("_")}`} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>{s}</NavLink></Fade>
            </li>))}
        </ul>
    )
}