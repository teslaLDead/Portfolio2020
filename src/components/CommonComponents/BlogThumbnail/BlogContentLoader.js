import React from "react"
import ContentLoader from "react-content-loader"

const BlogThumbnailLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="4" rx="5" ry="5" width="250" height="133" /> 
    <rect x="0" y="146" rx="4" ry="4" width="250" height="13" /> 
    <rect x="218" y="73" rx="0" ry="0" width="4" height="15" />
  </ContentLoader>
)

export default BlogThumbnailLoader