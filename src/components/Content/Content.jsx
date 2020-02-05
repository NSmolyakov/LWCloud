import React, { Suspense, lazy } from 'react';
import {Switch, Route} from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './Content.css';
import PreLoader from '../../assets/img/PreLoader/PreLoader.svg'

const Main = lazy(() => import('./Main/Main'));
const Trade = lazy(() => import('./Trade/Trade'));
const Stock = lazy(() => import('./Stock/Stock'));
const Structure = lazy(() => import('./Structure/Structure'));
const Reports = lazy(() => import('./Reports/Reports'));
const Account = lazy(() => import('./Account/Account'));
const NotFound = lazy(() => import('./404/NotFound'));
const InDevelopment = lazy(() => import('./InDevelopment/InDevelopment'));
const Notifications = lazy(() => import('./Notifications/Notifications'));
const OrderList = lazy(() => import('./OrderList/OrderList'));

function Content(){
    return(
        <div className='Content'>
            <Breadcrumbs />
              <Suspense fallback={<div><img src={PreLoader} alt='Загрузка'></img></div>}>
                  <Switch>   
                    <Route exact path="/" component={Main}/> 
                    <Route exact path="/trade" component={Trade}/> 
                    <Route exact path="/stock" component={Stock}/> 
                    <Route exact path="/structure" component={Structure}/> 
                    <Route exact path="/reports" component={Reports}/> 
                    <Route exact path="/account" component={Account}/> 
                    <Route exact path="/notifications" component={Notifications}/> 
                    <Route exact path="/indev" component={InDevelopment}/> 

                    <Route exact path="/orders_list" component={OrderList}/>
                    
                    <Route exact path="*" component={NotFound}/> 
                  </Switch>
              </Suspense>
    </div>
    )
}

export default Content;