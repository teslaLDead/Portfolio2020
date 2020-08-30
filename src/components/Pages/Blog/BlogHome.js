import React from "react";
import {Helmet} from "react-helmet";
import FeaturedSection from "./FeaturedSection";
import BlogCategoryNav from "./BlogCategoryNav";
import Fade from 'react-reveal/Fade';

class BlogHome extends React.Component{

    state = {
        data:{},
        postsLoaded:false
    }

    componentDidMount = () =>{
        const query= `
        {
            posts(stage: PUBLISHED) {
              id
            }
          }
          
        `;
        // console.log(process.env.REACT_APP_CMS_API)
        const url = process.env.REACT_APP_CMS_API;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        }
        // console.log('fetch starts here')
        fetch(url,opts)
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data)
                this.setState({
                    data:data,
                    postsLoaded:true
                })
            }
            )
            .catch(console.error)
    }

    render(){
        return(
            <div className="dark-theme my-5">
                <Helmet>
                    <title>Thoughs of Paritosh Kumar</title>
                </Helmet>
                <header>
                    <Fade>
                    <div className="section-heading">
                        Blog
                    </div>
                    </Fade>
                    <Fade top distance="50px" duration={1500} delay={500}>
                    <h1 className="py-4">
                    Thoughts to inspire 
                    </h1>
                    </Fade>
                    <div className="row">
                        <div className="col-1 col-m-4">
                        <Fade delay={200}>
                            <p>
                                <b>Topics</b>
                            </p>
                            </Fade>
                        </div>
                        <div className="col-2 col-m-4">
                            {/* blog category navigation section  */}
                            <BlogCategoryNav />
                        </div>
                        <div className="col-1 col-m-4">
                            {/* quote  */}
                            <Fade delay={500}>
                            <p>
                            &quot; Man cannot discover new oceans unless he has the courage to lose sight of the shore.&quot;   - Andre Gide

                            </p>
                            </Fade>
                        </div>
                    </div>
                    
                </header>
                <FeaturedSection data={this.state.data} postsLoaded={this.state.postsLoaded}/> 
            </div>
        )
    }
}

export default BlogHome;