import React from 'react'
import Ellipse from '../../assets/img/Cards/Ellipse.svg'
import ListZakazov from '../../assets/img/Cards/ListZakazov.svg'
import './Card.css'


function Card(){
    return(<div className='Card'>
        <img src={Ellipse} className='Ellipse' alt='Ellipse'></img>
        <img src={ListZakazov} className='ListZakazov' alt='ListZakazov'></img>
        <p className='CardTitle'>Листы заказов</p>
        <p className='CardDiscription'>просмотреть лист заказов </p>
    </div>)
}

export default Card