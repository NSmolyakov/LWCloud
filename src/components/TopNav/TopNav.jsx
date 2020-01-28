import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/Logo.svg'
import Notification from '../../assets/img/Notification.svg'
import More from '../../assets/img/More.svg'
import './TopNav.css'



function TopNav() {
    return(
        <div className='TopNav'>
            <img src={Logo} alt='Logo'></img>
            <nav>
                <div>
                    <NavLink to='/trade'>Торговля</NavLink>
                </div>
                <div>
                    <NavLink to='/stock'>Склад</NavLink>
                </div>
                <div>
                    <NavLink to='/structure'>Структура</NavLink>
                </div>
                <div>
                    <NavLink to='/reports'>Отчёты</NavLink>
                </div>
                <div>
                    <NavLink to='/account'>Аккаунт</NavLink>
                </div>
            </nav>
            <div className='NavBtns'>
                <img src={Notification} alt='Notification'></img>
                <img src={More} alt='More'></img>
            </div>
        </div>
    )
    
}

export default TopNav;