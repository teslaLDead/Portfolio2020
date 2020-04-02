import React from "react";
import BlogThumbnail from "../../CommonComponents/BlogThumbnail/BlogThumbnail";

class BlogPost extends React.Component{
    render(){
        return(
            <div>
                <div className="section-heading">
                    Blog Post
                </div>
                <div>
                    {/* blog content that will be fetched from cms */}
                </div>
                <div>
                    <div className="section-heading">
                        Related Articles
                    </div>
                    <div>
                    <BlogThumbnail />
                    <BlogThumbnail />
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;