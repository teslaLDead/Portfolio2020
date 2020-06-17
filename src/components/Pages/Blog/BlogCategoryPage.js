import React from "react";
import {Helmet} from "react-helmet";
import FeaturedSection from "./FeaturedSection";
import BlogCategoryNav from './BlogCategoryNav';
import Fade from 'react-reveal/Fade';

export default class BlogCategoryPage extends React.Component{

    state={
        blogs:{},
        blogsLoaded:false,
        categoryURL:""

    }

    componentDidMount = () =>{

        this.setState({
            categoryURL:document.URL
        })
     
    }

    blogCategoryChange = (new_category) =>{
        this.setState({
            categoryURL:new_category
        })
    }

    


    render(){

        let BlogCategoryName=this.state.categoryURL.split('/');
        BlogCategoryName=BlogCategoryName[BlogCategoryName.length-1].split('_').join(" ")

    
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
            <FeaturedSection />

            
        </div>
    )}
}