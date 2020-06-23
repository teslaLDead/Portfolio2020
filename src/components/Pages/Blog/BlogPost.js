import React from "react";
import BlogThumbnail from "../../CommonComponents/BlogThumbnail/BlogThumbnail";
import "./BlogPost.css";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

class BlogPost extends React.Component{

    state={
        url:document.URL,
        postDataLoaded:false,
        data:{}
    }

    componentDidMount = () =>{
      
        let url = this.state.url.split('/')
        url=url[url.length-1]
        console.log(url)
        const query=`
        {
            post(where: {slug: "${url}"}) {
                title
                content{
                  html
                }
                excerpt
                coverImage{
                  url
                }
                tags
                date
            }
          }
          
        `

        const apiURl="https://api-eu-central-1.graphcms.com/v2/ckbcjt7yc0cix01xyap6x3h0p/master";

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        }

        fetch(apiURl,opts)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    postDataLoaded:true,
                    data:data.data.post
                })
                console.log(this.state.data)
            })
            .then(console.error)
    }

    

    render(){

        if(this.state.postDataLoaded){

            const tagSection=this.state.data.tags.map(tag=><Link to={`/blog/category/${tag}`} className="mx-5"> {tag.split('_').join(" ")} </Link>)
            
          
            return(
                <div className="dark-theme blog-post-container my-5 py-5">
                <Helmet>
            <title>{this.state.data.title}</title>
           
                </Helmet>
                <header style={{height:"auto"}}>
                    <div className="section-heading">
                        Blog Post
                    </div>
                    <h1>{this.state.data.title}</h1>
                  
                            {/* this will contain the tags related to the blog  */}
                    <div>
                        <span className="mr-5">
                            <b>Tags</b>
                        </span>
                        {tagSection}
                    </div>
                      
                    <div className="my-5 d-flex justify-content-center">
                        <img src={this.state.data.coverImage.url} alt=""  />
                    </div>
                </header>
                
                    
                    <div className="row my-5 justify-content-center">
                        <div className="blog-content">
                            <h2>{this.state.data.excerpt}</h2>
                            <div dangerouslySetInnerHTML={{__html : this.state.data.content.html}}></div>
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
        else{
            return <div style={{height:"100vh"}}></div>
        }

        
    }
}

export default BlogPost;