import Navbar from "./navbar";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import About from './about';
import Create from './create';
import Home from './home';
import Notfound from './notfound';
import Blogcontent from './blogContent';
function App() {
  return (

    <div className="App">
    <Router>
        <Navbar />
    
      <div className="content">
      <Switch>
           <Route exact path= "/">
            <Home />
           </Route>
           <Route path= "/create">
              <Create />
           </Route>
           <Route path= "/about">
              <About />
           </Route>
           <Route path= "/Blog/:id">
              <Blogcontent />
           </Route>
           <Route path= "*">
            <Notfound />
           </Route>
         </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
