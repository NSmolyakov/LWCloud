import React from 'react'
import RegistrasionPartner from '../../../../assets/img/Cards/RegistrasionPartner.svg'
import './Notification.css'


function Notification() {
    return (
        <div className='Notification'>
            <img src={RegistrasionPartner} alt='ListZakazov' />

            <p>Дистрибьютор <strong>0008904114</strong> успешно зарегистрирован в системе</p>

        </div>

    )
}

export default Notification;