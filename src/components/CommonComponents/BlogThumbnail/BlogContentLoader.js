import React from "react"
import ContentLoader from "react-content-loader"

const BlogThumbnailLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={400}
    height={180}
    viewBox="0 0 400 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="4" rx="5" ry="5" width="250" height="133" /> 
    <rect x="0" y="145" rx="5" ry="5" width="250" height="25" /> 
    <rect x="218" y="73" rx="0" ry="0" width="4" height="20" />
  </ContentLoader>
)

export default BlogThumbnailLoader