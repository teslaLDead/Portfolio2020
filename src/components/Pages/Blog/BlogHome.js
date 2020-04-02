import React from "react";
import BlogThumbnail from '../../CommonComponents/BlogThumbnail/BlogThumbnail';

class BlogHome extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="section-heading">
                        <h1>
                        Thoughts to inspire 
                        </h1>
                        <div>
                            <div>
                                <p>
                                    Topics
                                </p>
                            </div>
                            <div>
                                {/* blog category navigation section  */}
                                <ul>
                                    <li>
                                        <a href="" >Web Development</a>
                                    </li>
                                    <li>
                                        <a href="" >UI/UX Design</a>
                                    </li>
                                    <li>
                                        <a href="" >Coding</a>
                                    </li>
                                    <li>
                                        <a href="" >Consumer Tech</a>
                                    </li>
                                    <li>
                                        <a href="" >Philosophy</a>
                                    </li>
                                    <li>
                                        <a href="" >Machine Learning and Data Science</a>
                                    </li>
                                    <li>
                                        <a href="" >New Tech Adventures</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* quote  */}
                                <p>
                                &quot; Man cannot discover new oceans unless he has the courage to lose sight of the shore.&quot;   - Andre Gide

                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <h2>
                        Featured Posts
                    </h2>
                    <div>
                        <div>
                            <BlogThumbnail />
                            <BlogThumbnail />
                        </div>
                        <div>
                            <BlogThumbnail />
                            <BlogThumbnail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogHome;