import React, { Suspense, lazy } from 'react';
import {Switch, Route} from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './Content.css';

const Main = lazy(() => import('./Main/Main'));
const Trade = lazy(() => import('./Trade/Trade'));
const Stock = lazy(() => import('./Stock/Stock'));
const Structure = lazy(() => import('./Structure/Structure'));
const Reports = lazy(() => import('./Reports/Reports'));
const Account = lazy(() => import('./Account/Account'));
const NotFound = lazy(() => import('./404/NotFound'));
const InDevelopment = lazy(() => import('./InDevelopment/InDevelopment'));


function Content(){
    return(
        <div className='Content'>
            <Breadcrumbs />
              <Suspense fallback={<h3>Загрузка...</h3>}>
                  <Switch>   
                    <Route exact path="/" component={Main}/> 
                    <Route exact path="/trade" component={Trade}/> 
                    <Route exact path="/stock" component={Stock}/> 
                    <Route exact path="/structure" component={Structure}/> 
                    <Route exact path="/reports" component={Reports}/> 
                    <Route exact path="/account" component={Account}/> 
                    <Route exact path="/indev" component={InDevelopment}/> 
                    <Route exact path="*" component={NotFound}/> 
                  </Switch>
              </Suspense>
    </div>
    )
}

export default Content;