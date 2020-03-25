import React from 'react'
import Card from '../Card'
import './CardGrid.css'
import ListZakazov from '../../../assets/img/Cards/ListZakazov.svg'

function TradeCardGrid(props) {
    return (<div className='CardGrid'>
        <Card name='Лист Заказов' discription='просмотреть лист заказов' link='/indev' symbol={ListZakazov} />
        <Card name='Оформить заказ' discription='перейти к оформлению заказа в программе' link='/indev' symbol={ListZakazov} />
        <Card name='Интернет-заказы' discription='Просмотреть заказы интернет-магазина' link='/indev' symbol={ListZakazov} />
        <Card name='Документация' discription='Документы на продукцию корпорации' link='/indev' symbol={ListZakazov} />
    </div>
    )
}

export default TradeCardGrid