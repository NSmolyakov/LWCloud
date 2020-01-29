import React from 'react'
import AccountPhoto from '../../../assets/img/photo.png'
import CardGrid from '../../Cards/CardGrid'
import './Account.css'

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

            <CardGrid />

            <div className='AccountExit'> <p className='redlink'>Выйти из аккаунта</p></div>
           
        </div>
    
    )
}

export default Account;