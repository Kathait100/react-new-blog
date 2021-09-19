import { useState, useEffect } from "react";
const useFetch  = (url) => {
    const[data, setData] = useState(null);
    const[isPending, setIspending] = useState(true);
    const[isError, setIsError] = useState(null);

    useEffect( () => {
        const abort = new AbortController();
        fetch(url, { signal: abort.signal})
        .then((blogs) => 
        {   
            if(!blogs.ok)
            {
                throw new Error();
            }else
            {
                return blogs.json();
            }
        })
        .then(
            (data) => 
            {  
               setIspending(false);
               setIsError(null);
               setData(data); 
            })
            .catch( (error) => {
                if(error.name === 'AbortError')
                {
                   console.log('Fetch Aborted');
                }else
                {
                    setIspending(false);
                    error.message = 'Error Loading This Page, Please Try Again';
                    setIsError(error.message);
                    
                }
                
            })
         return () => {
        abort.abort();
         }   

    },[url]);
    return (  {data, isError, isPending } );
}
export default useFetch;
