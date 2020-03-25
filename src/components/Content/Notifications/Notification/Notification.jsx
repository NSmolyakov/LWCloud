import React from 'react'
import Ellipse from '../../../../assets/img/Cards/Ellipse.svg'
import RegistrasionPartner from '../../../../assets/img/Cards/RegistrasionPartner.svg'


function Notification() {
    return(
        <div className='Notfication'>
            <img src={Ellipse}  alt='Ellipse'/>
            <img src={RegistrasionPartner} alt='ListZakazov' />
            <p>Дистрибьютор <strong>0008904114</strong> успешно зарегистрирован в системе</p>
        </div>
        
    )
}

export default Notification;