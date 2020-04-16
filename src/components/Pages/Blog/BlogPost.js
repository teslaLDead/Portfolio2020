import React from "react";
import BlogThumbnail from "../../CommonComponents/BlogThumbnail/BlogThumbnail";
import "./BlogPost.css";
import {Helmet} from "react-helmet";

class BlogPost extends React.Component{
    render(){
        return(
            <div className="dark-theme blog-post-container my-5 py-5">
            <Helmet>
                

            </Helmet>
            <header>
                <div className="section-heading">
                    Blog Post
                </div>
                <h1>Font inspirations for portfolio pages to make it more awesome</h1>
                <div className="my-5">
                    <img src="" alt="" />
                </div>
            </header>
            
                
                <div className="row mb-5">
                    <div className="col-2 col-offset-1 col-m-offset-0">
                        {/* this will contain the tags related to the blog  */}
                        <div>
                            <span className="mr-5">
                                <b>Tags</b>
                            </span>
                            <span className="mx-5">
                                Web Development
                            </span>
                            <span className="mx-5">
                                Web Development
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div className="section-heading py-5">
                        Related Articles
                    </div>
                    <div className="row">
                        <div className="col-1 col-m-4">
                            <BlogThumbnail />
                        </div>
                        <div className="col-1 col-m-4">
                            <BlogThumbnail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;