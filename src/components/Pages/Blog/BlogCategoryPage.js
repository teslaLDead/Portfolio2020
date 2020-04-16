import React from "react";
import {Helmet} from "react-helmet";
import FeaturedSection from "./FeaturedSection";
import BlogCategoryNav from './BlogCategoryNav';
export default function BlogCategoryPage(props){

    const BlogCategoryName="Web Development";
    return(
        <div className="dark-theme my-5 py-5">
            <Helmet>
        <title>{BlogCategoryName}</title>
            </Helmet>
            <div>
                <div className="section-heading">
                    Blog Category
                </div>
                <div className="row py-4 align-items-baseline" >
                    <div className="col-3 col-m-4">
                        <h1 className="py-5">
                            {BlogCategoryName}
                        {/* this value will have to be obtained from slug  */}
                        </h1>
                    </div>
                
                    <div className="col-1 col-m-4">
                        <BlogCategoryNav />
                    </div>
                </div>
                
            </div>
            <FeaturedSection />

            
        </div>
    )
}