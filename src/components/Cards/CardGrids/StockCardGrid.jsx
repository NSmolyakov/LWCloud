import React from 'react'
import Card from '../Card'
import './CardGrid.css'
import ListZakazov from '../../../assets/img/Cards/ListZakazov.svg'


function StockCardGrid(props) {
    return (<div className='CardGrid'>
        <Card name='Текущие остатки' discription='Текущее количество товаров на Вашем складе' link='/indev' symbol={ListZakazov} />
        <Card name='Запросить товар' discription='Запросить товар с оптового склада' link='/indev' symbol={ListZakazov} />
        <Card name='Учёт товаров' discription='Завести или списать товары в программе' link='/indev' symbol={ListZakazov} />
        <Card name='Прейскурант' discription='Перечень всех товаров и все необходимые данные о них' link='/indev' symbol={ListZakazov} />
    </div>
    )
}

export default StockCardGrid