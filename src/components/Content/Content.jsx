import React from 'react'
import {Switch, Route} from "react-router-dom";

import Main from './Main/Main';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

import Trade from './Trade/Trade';
import Stock from './Stock/Stock';
import Structure from './Structure/Structure';
import Reports from './Reports/Reports';
import Account from './Account/Account';
import NotFound from './404/NotFound'
import InDevelopment from './InDevelopment/InDevelopment'

import './Content.css'

function Content(){
    return(
        <div className='Content'>
            <Breadcrumbs />
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
        <Route exact path="/indev">
          <InDevelopment />
        </Route>
        <Route path="*">
          <NotFound  />
        </Route>
    </Switch>
    </div>
    )
}

export default Content;