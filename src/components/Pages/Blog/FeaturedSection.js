import React from "react";
import BlogThumbnail from '../../CommonComponents/BlogThumbnail/BlogThumbnail';

export default function FeaturedSection(props) {
    // the featured section will need an input, this will come from props and 
    // will be passed by the parent element 
    if (props.postsLoaded)


    return(
        <div className="my-5">
                    <div className="section-heading">
                        Featured Posts
                    </div>
                    <div>
                        <div className="row my-5 py-5">
                            <div className="col-2 col-m-4 ">
                                <BlogThumbnail data={props.data.data.posts[0]}/>
                            </div>
                            <div className="col-2 col-m-4 ">
                                <BlogThumbnail data={props.data.data.posts[1]}/>
                            </div>
                        </div>
                        <div className="row my-5 py-5">
                            <div className="col-2 col-m-4 col-m-offset-0 col-offset-1">
                                <BlogThumbnail data={props.data.data.posts[2]}/>
                            </div>
                            <div className="col-1 col-m-4 ">
                                <BlogThumbnail data={props.data.data.posts[3]}/>
                            </div>
                        </div>
                    </div>
                </div>
    )

    else{
        return (
            <div></div>
        )
    }
}