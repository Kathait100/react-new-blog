import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";
const Blogcontent = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data: blog } = useFetch('https://my-newreact12.herokuapp.com/Blog/'+ id);
    const handelDelete = () => {
        fetch('https://my-newreact12.herokuapp.com/Blog/'+ id, {
            method:'DELETE'
        }).then( () => {
            history.push('/');
        })
    }

    return ( 
            <div className = "Id-content">
            {   
                blog && <div>
                <article>
                <h2>Written By : {blog.Author}</h2>
                <p>{blog.Content}</p>
                </article> 
                <button onClick = {handelDelete}>Delete</button>
               </div>
             }
            </div>
     );
}
 
export default Blogcontent;