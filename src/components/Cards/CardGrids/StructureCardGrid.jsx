import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function StructureCardGrid(props){
    return(
    <div className='CardGrid'>
        <Card name='Регистрация' discription ='Зарегистрировать нового партнёра' link='/indev'/>
        <Card name='Передача бонусов'  discription ='Передать бонусы дистрибьюторам моей структуры' link='/indev'/>
        <Card name='Список дистрибьюторов' discription ='Просмотреть список дистрибьюторов структуры' link='/indev'/>
    </div>
    )
}

export default StructureCardGrid