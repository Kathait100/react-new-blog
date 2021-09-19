import { useState} from "react";
import { useHistory } from "react-router";
const Create = () => {
const[Title, SetTitle] = useState('');
const[Author, setAuthor] = useState('vikash');
const[Content, setContent] = useState('');
const[isPending, setIspending] = useState(false);
const history = useHistory();

const handelSubmit = (e) => {
    e.preventDefault();
    const blog = {Title, Author, Content};
    setIspending(true);
    fetch('https://my-newreact12.herokuapp.com/Blog', {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(blog) 
    }).then( () =>
     {
        setIspending(false);
        history.push('/');
        
    })     
}

    return ( 
        <div className="create-blog">
            <h2>Add BLog</h2>
            <form onSubmit={handelSubmit}>
            <label>Title</label>
            <input 
            type = "text"
            value = {Title}
            onChange = { (e) => {SetTitle(e.target.value)}}
            />
            <label>Content</label>
            <textarea 
              value = {Content}
              onChange = { (e) => {setContent(e.target.value)}}
            />
            <select value = {Author} onChange = {(e) => setAuthor(e.target.value)}>
                <option value = "vikash">Vikash</option>
                <option value = "Aayush">Aayush</option>
            </select>
              {!isPending && <button>Add Blog</button>}
              {isPending && <button disabled>Adding....</button>}
            </form>
        </div>
     );
}
 
export default Create;