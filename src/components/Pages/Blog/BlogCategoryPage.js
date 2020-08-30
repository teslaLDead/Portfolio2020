import React from "react";
import {Helmet} from "react-helmet";
import BlogCategoryNav from './BlogCategoryNav';
import BlogThumbnail from '../../CommonComponents/BlogThumbnail/BlogThumbnail'
import Fade from 'react-reveal/Fade';

export default class BlogCategoryPage extends React.Component{

    state={
        blogs:[],
        blogsLoaded:false,
        categoryURL:""

    }

    componentDidMount = () =>{

        this.setState({
            categoryURL:document.location.pathname.split('/').slice(-1)[0]
        })
        console.log(document.location.pathname.split('/').slice(-1))

        const query= `
        {
            posts(stage: PUBLISHED, where: {tags_contains_some: ${document.location.pathname.split('/').slice(-1)}}) {
                id
              }
          }
          
        `;
        const url = process.env.REACT_APP_CMS_API || 'https://api-eu-central-1.graphcms.com/v2/ckbcjt7yc0cix01xyap6x3h0p/master';

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        }
        console.log('fetch starts here')
        fetch(url,opts)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                this.setState({
                    blogs:data.data.posts
                })
            }
            )
            .catch(console.error)
     
    }

    componentDidUpdate = (prevProps,prevState) =>{
        if(prevState.categoryURL !== this.state.categoryURL){
            const query= `
        {
            posts(stage: PUBLISHED, where: {tags_contains_some: ${this.state.categoryURL}}) {
                id
              }
          }
          
        `;
        const url = process.env.REACT_APP_CMS_API || 'https://api-eu-central-1.graphcms.com/v2/ckbcjt7yc0cix01xyap6x3h0p/master';

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        }
        console.log('fetch starts here')
        fetch(url,opts)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                this.setState({
                    blogs:data.data.posts
                })
            }
            )
            .catch(console.error)
        }
        
    }

    blogCategoryChange = (new_category) =>{
        this.setState({
            categoryURL:new_category.split(' ').join('_')
        })
    }

    


    render(){

        let BlogCategoryName=this.state.categoryURL.split('_').join(' ');

        console.log(this.state.blogs)
    
    return(
        <div className="dark-theme my-5 py-5">
            <Helmet>
        <title>{BlogCategoryName}</title>
            </Helmet>
            <div>
            <Fade>
                <div className="section-heading">
                    Blog Category
                </div>
            </Fade>
                <div className="row py-4 align-items-baseline" >
                    <div className="col-3 col-m-4">
                    <Fade top distance="50px" duration={1500} delay={500}>
                        <h1 className="py-5">
                            {BlogCategoryName}
                        {/* this value will have to be obtained from slug  */}
                        </h1>
                    </Fade>
                    </div>
                
                    <div className="col-1 col-m-4">
                        <BlogCategoryNav blogCategoryChange={this.blogCategoryChange}/>
                    </div>
                </div>
                
            </div>
            <div className="row my-5">
                {this.state.blogs.map(({id})=>
                <div className="col-2">
                <BlogThumbnail id={id} />
                </div>
                )}
            </div>
            
            

            
        </div>
    )}
}