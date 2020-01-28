import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TopNav from './components/TopNav/TopNav'
import Main from './components/Content/Main/Main';
import Trade from './components/Content/Trade/Trade';
import Stock from './components/Content/Stock/Stock';
import Structure from './components/Content/Structure/Structure';
import Reports from './components/Content/Reports/Reports';
import Account from'./components/Content/Account/Account';


function App() {
  return (
<Router>
  <div className="App">
    <TopNav />
      <Switch>    
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/trade">
            <Trade />
          </Route>
          <Route exact path="/stock">
            <Stock />
          </Route>
          <Route exact path="/structure">
            <Structure />
          </Route>
          <Route exact path="/reports">
            <Reports />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
      </Switch>
  </div>
</Router>
   
  );
}

export default App;
