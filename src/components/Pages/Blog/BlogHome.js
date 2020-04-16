import React from "react";
import {Helmet} from "react-helmet";
import FeaturedSection from "./FeaturedSection";
import BlogCategoryNav from "./BlogCategoryNav";

class BlogHome extends React.Component{
    render(){
        return(
            <div className="dark-theme my-5">
                <Helmet>
                    <title>Thoughs of Paritosh Kumar</title>
                </Helmet>
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
                            <BlogCategoryNav />
                        </div>
                        <div className="col-1 col-m-4">
                            {/* quote  */}
                            <p>
                            &quot; Man cannot discover new oceans unless he has the courage to lose sight of the shore.&quot;   - Andre Gide

                            </p>
                        </div>
                    </div>
                    
                </header>
                <FeaturedSection />
            </div>
        )
    }
}

export default BlogHome;