import { Link } from "react-router-dom";

const BlogDetails = ({data}) => {
    return ( 
        <div className="blogDetails">
            {data.map( (blog) => (
                <div className="blog-preview" key = {blog.id}>
                <Link to ={`/Blog/${blog.id}`}><h1 className ="blog-header">{blog.Title} </h1></Link>
                <h2>Penned By: {blog.Author}</h2>  
               </div>
              ))}
        </div>
     );
}
 
export default BlogDetails;