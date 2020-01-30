import React from 'react'
import Card from '../Card'
import './CardGrid.css'

function AccountCardGrid(props){
    return(
    <div className='CardGrid'>
        <Card name='Пополнить счёт' discription ='Пополнить личный счёт аккаунта'/>
        <Card name='Использовать баллы'  discription ='Купить продукцию корпорации и оплатить баллами'/>
        <Card name='Мои данные'  discription ='Редактировать личные данные аккаунта'/>
    </div>
    )
}

export default AccountCardGrid