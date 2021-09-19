// import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";
import useFetch from "./useFetch";
const Home = () => {
   const { data, isError, isPending}  = useFetch('https://my-newreact12.herokuapp.com/Blog');
    return ( 
        <div className="home-component">
            {isPending && <div><h1>Loading...</h1></div>}
            {isError && <div><h1>{isError}</h1></div>}
            {data && <BlogDetails data = {data}/>}
        </div>
     );
}
 
export default Home;