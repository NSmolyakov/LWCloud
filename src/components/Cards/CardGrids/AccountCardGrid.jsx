import React from 'react'
import Card from '../Card'
import './CardGrid.css'
import ListZakazov from '../../../assets/img/Cards/ListZakazov.svg'

function AccountCardGrid(props) {
    return (
        <div className='CardGrid'>
            <Card name='Пополнить счёт' discription='Пополнить личный счёт аккаунта' link='/indev' symbol={ListZakazov} />
            <Card name='Использовать баллы' discription='Купить продукцию корпорации и оплатить баллами' link='/indev' symbol={ListZakazov} />
            <Card name='Мои данные' discription='Редактировать личные данные аккаунта' link='/indev' symbol={ListZakazov} />
        </div>
    )
}

export default AccountCardGrid