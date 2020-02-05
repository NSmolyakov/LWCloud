import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function MainCardGrid(props){
    return(
    <div className='CardGrid'>
        <Card name='Лист Заказов' discription ='просмотреть лист заказов' link='/orders_list'/>
        <Card name='Оформить заказ'  discription ='перейти к оформлению заказа в программе' link='/order'/>
        <Card name='Отчёт директоров'  discription ='просмотреть отчёт директоров' link='/directors_report'/>
        <Card name='Регистрация' discription ='Зарегистрировать нового партнёра' link='/partner_registration' />
        <Card name='Запросить товар'  discription ='Запросить товар с оптового склада' link='/items_request' />
        <Card name='Учёт товаров' discription ='Завести или списать товары в программе'link='/items_accounting' />
        <Card name='Передача бонусов' discription ='Передать бонусы дистрибьюторам моей структуры' link='/bonus_transfers' />
        <Card name='Список дистрибьюторов' discription ='просмотреть список дистрибьюторов структуры' link='/distributors_list' />
    </div>
    )
}

export default MainCardGrid