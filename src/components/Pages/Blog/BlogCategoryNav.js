import React from "react";
import BlogCategories from './BlogCategories.json';
const blogCat=BlogCategories.blogCategories;
export default function BlogCategoryNav(props) {
    console.log(BlogCategories)
    
    return(
        <ul>
            {blogCat.map(s=>(<li className="mb-5 medium-font">
                <a href="">{s}</a>
            </li>))}
        </ul>
    )
}