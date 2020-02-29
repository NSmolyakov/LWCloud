import React from 'react'
import AccountPhoto from '../../../assets/img/photo.png'
import AccountCardGrid from '../../Cards/CardGrids/AccountCardGrid'
import './Account.css'
import { NavLink } from 'react-router-dom'

function Account() {
    return(<div className='Account'>
            <h1>Данные профиля</h1>
            <div className='AccountWrapper'> 
                <div className='Photo'><img src={AccountPhoto} alt='ProfilePhoto'></img></div>

                <div className='AccountData'> <h2>Андреев Сергей Иванович </h2><p className='AccountRole'>руководитель ИСЦ</p><p className='Place'>Россия, г. Новосибирск</p></div>
                
                <div className='Balance'>
                    <div className='BalanceWrapper'><p><b>Баланс: </b> 2800 руб. / 480 ББ</p> <p className='link' >Пополнить</p></div>
                </div>
            </div>

            <AccountCardGrid />

           <div className='AccountExit'>  <NavLink to='/login'><p className='redlink'>Выйти из аккаунта</p></NavLink></div>
           
        </div>
    
    )
}

export default Account;