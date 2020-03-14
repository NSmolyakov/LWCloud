import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function TradeCardGrid(props) {
    return (<div className='CardGrid'>
        <Card name='Лист Заказов' discription='просмотреть лист заказов' link='/indev' />
        <Card name='Оформить заказ' discription='перейти к оформлению заказа в программе' link='/indev' />
        <Card name='Интернет-заказы' discription='Просмотреть заказы интернет-магазина' link='/indev' />
        <Card name='Документация' discription='Документы на продукцию корпорации' link='/indev' />
    </div>
    )
}

export default TradeCardGrid