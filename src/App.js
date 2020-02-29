import React, { Suspense } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import TopNav from './components/TopNav/TopNav';
import Content from './components/Content/Content'
import LogIn from './components/Content/LogIn/LogIn'
import PreLoader from './assets/img/PreLoader/PreLoader.svg'


function App() {
  return (
<Router>
  <Suspense fallback={<div><img src={PreLoader} alt='Загрузка'></img></div>}>
    <Switch>
      <Route path='/login' component={LogIn}></Route>
      <Route path='*'>
          <div className="App">
            <TopNav />
            <Content />
          </div>
      </Route>
    </Switch>
  </Suspense>
</Router>
   
  );
}

export default App;
