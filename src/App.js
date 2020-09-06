import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Showpost from './Components/Showpost/Showpost';
import NoMatch from './Components/NoMatach/NoMatch';
import Postdetails from './Components/Postdetails/Postdetails';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
             <Route path="/Showpost">
                <Showpost></Showpost>
             </Route>
             <Route path="/post/:postId">
                <Postdetails></Postdetails>
             </Route>
             <Route exact path="/">
                  <Showpost/>
             </Route>
             <Route path="*">
                <NoMatch></NoMatch>
             </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
