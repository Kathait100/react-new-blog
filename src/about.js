import useFetch from "./useFetch";
const About = () => {
    const {data: About, isError, isPending } = useFetch('https://my-newreact12.herokuapp.com/About');
    return ( 
        <div className="about-blog">
            {About && <h2>{About.Content}</h2>}
            {isError && <h2>Currently unAvailable To fetch Data</h2>}
            {isPending && <h1>Loading....</h1>}
        </div>
     );
}
 
export default About;