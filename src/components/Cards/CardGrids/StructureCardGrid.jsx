import React from 'react'
import Card from '../Card'
import './CardGrid.css'
import ListZakazov from '../../../assets/img/Cards/ListZakazov.svg'

function StructureCardGrid(props) {
    return (
        <div className='CardGrid'>
            <Card name='Регистрация' discription='Зарегистрировать нового партнёра' link='/indev' symbol={ListZakazov} />
            <Card name='Передача бонусов' discription='Передать бонусы дистрибьюторам моей структуры' link='/indev' symbol={ListZakazov} />
            <Card name='Список дистрибьюторов' discription='Просмотреть список дистрибьюторов структуры' link='/indev' symbol={ListZakazov} />
        </div>
    )
}

export default StructureCardGrid