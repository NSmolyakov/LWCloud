import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function StructureCardGrid(props){
    return(
    <div className='CardGrid'>
        <Card name='Регистрация' discription ='Зарегистрировать нового партнёра'/>
        <Card name='Передача бонусов'  discription ='Передать бонусы дистрибьюторам моей структуры'/>
        <Card name='Список дистрибьюторов' discription ='Просмотреть список дистрибьюторов структуры'/>
    </div>
    )
}

export default StructureCardGrid