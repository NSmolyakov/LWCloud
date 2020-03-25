import React from 'react'
import Ellipse from '../../../../assets/img/Cards/Ellipse.svg'
import RegistrasionPartner from '../../../../assets/img/Cards/RegistrasionPartner.svg'


function Notification() {
    return(
        <div className='Notfication'>
            <img src={Ellipse} className='Ellipse' alt='Ellipse'/>
            <img src={RegistrasionPartner} className='ListZakazov' alt='ListZakazov' />
            <p>Дистрибьютор 0008904114 успешно зарегистрирован в системе</p>
        </div>
        
    )
}

export default Notification;