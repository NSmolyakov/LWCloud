import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function MainCardGrid(props){
    return(
    <div className='CardGrid'>
        <Card name='Лист Заказов' discription ='просмотреть лист заказов'/>
        <Card name='Оформить заказ'  discription ='перейти к оформлению заказа в программе'/>
        <Card name='Отчёт директоров'  discription ='просмотреть отчёт директоров'/>
        <Card name='Регистрация' discription ='Зарегистрировать нового партнёра'/>
        <Card name='Запросить товар'  discription ='Запросить товар с оптового склада'/>
        <Card name='Учёт товаров' discription ='Завести или списать товары в программе'/>
        <Card name='Передача бонусов' discription ='Передать бонусы дистрибьюторам моей структуры'/>
        <Card name='Список дистрибьюторов' discription ='просмотреть список дистрибьюторов структуры'/>
    </div>
    )
}

export default MainCardGrid