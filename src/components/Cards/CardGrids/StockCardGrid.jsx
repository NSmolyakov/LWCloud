import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function StockCardGrid(props) {
    return (<div className='CardGrid'>
        <Card name='Текущие остатки' discription='Текущее количество товаров на Вашем складе' link='/indev' />
        <Card name='Запросить товар' discription='Запросить товар с оптового склада' link='/indev' />
        <Card name='Учёт товаров' discription='Завести или списать товары в программе' link='/indev' />
        <Card name='Прейскурант' discription='Перечень всех товаров и все необходимые данные о них' link='/indev' />
    </div>
    )
}

export default StockCardGrid