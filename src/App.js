import React from 'react';
import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import TopNav from './components/TopNav/TopNav';
import Content from './components/Content/Content'


function App() {
  return (
<Router>
  <div className="App">
    <TopNav />
    <Content />
  </div>
</Router>
   
  );
}

export default App;
