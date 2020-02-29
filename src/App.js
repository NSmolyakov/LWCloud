import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import TopNav from './components/TopNav/TopNav';
import Content from './components/Content/Content'
import LogIn from './components/Content/LogIn/LogIn'


function App() {
  return (
<Router>
  <Switch>
    <Route path='/login' component={LogIn}></Route>
    <Route path='*'>
        <div className="App">
          <TopNav />
          <Content />
        </div>
    </Route>
  </Switch>

</Router>
   
  );
}

export default App;
