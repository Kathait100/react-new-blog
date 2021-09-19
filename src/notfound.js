import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
           <Link to ="/">Home Page</Link>
        </div>
     );
}
 
export default Notfound;