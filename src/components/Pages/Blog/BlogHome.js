import React from "react";
import BlogThumbnail from '../../CommonComponents/BlogThumbnail/BlogThumbnail';

class BlogHome extends React.Component{
    render(){
        return(
            <div className="dark-theme my-5">
                <header>
                    <div className="section-heading">
                        Blog
                    </div>
                    <h1 className="py-4">
                    Thoughts to inspire 
                    </h1>
                    <div className="row">
                        <div className="col-1 col-m-4">
                            <p>
                                <b>Topics</b>
                            </p>
                        </div>
                        <div className="col-2 col-m-4">
                            {/* blog category navigation section  */}
                            <ul>
                                <li className="mb-5 medium-font">
                                    <a href="" >Web Development</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >UI/UX Design</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >Coding</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >Consumer Tech</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >Philosophy</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >Machine Learning and Data Science</a>
                                </li>
                                <li className="mb-5 medium-font">
                                    <a href="" >New Tech Adventures</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1 col-m-4">
                            {/* quote  */}
                            <p>
                            &quot; Man cannot discover new oceans unless he has the courage to lose sight of the shore.&quot;   - Andre Gide

                            </p>
                        </div>
                    </div>
                    
                </header>
                <div className="my-5">
                    <h2>
                        Featured Posts
                    </h2>
                    <div>
                        <div className="row my-5 py-5">
                            <div className="col-2 col-m-4 ">
                                <BlogThumbnail />
                            </div>
                            <div className="col-2 col-m-4 ">
                                <BlogThumbnail />
                            </div>
                        </div>
                        <div className="row my-5 py-5">
                            <div className="col-2 col-m-4 col-m-offset-0 col-offset-1">
                                <BlogThumbnail />
                            </div>
                            <div className="col-1 col-m-4 ">
                                <BlogThumbnail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogHome;