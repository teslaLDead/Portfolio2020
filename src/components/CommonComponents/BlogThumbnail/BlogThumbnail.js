import React,{useState, useEffect} from "react";
import './BlogThumbnail.css';
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import BlogThumbnailLoader from './BlogContentLoader';
//the data again will be populated from dynamic sources
const BlogThumbnail = ( { id } ) => {

    const [data,setData] = useState({
        data:{},
        loaded:false
    })
    
    // console.log(id)
    useEffect(()=>{
        const query= `{
        post(where: {id: "${id}"}) {
            title
            tags
            slug
            coverImage {
              url
            }
          }
        }
          
        `;
        const url = process.env.REACT_APP_CMS_API;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        }
        fetch(url,opts)
            .then(res=>res.json())
            .then((res)=>{
                setData({
                    data:res.data.post,
                    loaded:true
                })
            }
            )
            .catch(console.error)
    },[id])



    
    if (id && data.loaded)
   {
    return(
        <div className="blog-thumbnail">
                <Link to={`/blog/${data.data.slug}`}>
            <div>

            <Fade top delay={200} distance="50px" duration={1500}>
            <div className="thumbnail-image-container">
                <img src={data.data.coverImage.url} alt="" />
            </div>
            </Fade>
            <Fade top delay={600} distance="10px">
            <p className="bold">
               {data.data.title.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')}
            </p>
            </Fade>
            </div>
                </Link>
        </div>
    )
}
else{
    return(
        <BlogThumbnailLoader />
    )
}
}

export default BlogThumbnail