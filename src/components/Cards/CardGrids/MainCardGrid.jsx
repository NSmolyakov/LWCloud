import React from 'react'
import Card from '../Card'
import './CardGrid.css'

import ListZakazov from '../../../assets/img/Cards/ListZakazov.svg'
import RegistrationZakaz from '../../../assets/img/Cards/RegistrationZakaz.svg'
import Flag from '../../../assets/img/Cards/Flag.svg'
import RegistrasionPartner from '../../../assets/img/Cards/RegistrasionPartner.svg'
import Box from '../../../assets/img/Cards/Box.svg'
import Audit from '../../../assets/img/Cards/Audit.svg'
import Transfer from '../../../assets/img/Cards/Transfer.svg'
import Struct from '../../../assets/img/Cards/Struct.svg'

function MainCardGrid(props) {
    return (
        <div className='CardGrid'>
            <Card name='Лист Заказов' discription='просмотреть лист заказов' link='/orders_list' symbol={ListZakazov}/>
            <Card name='Оформить заказ' discription='перейти к оформлению заказа в программе' link='/order' symbol={RegistrationZakaz} />
            <Card name='Отчёт директоров' discription='просмотреть отчёт директоров' link='/directors_report' symbol={Flag} />
            <Card name='Регистрация' discription='Зарегистрировать нового партнёра' link='/partner_registration' symbol={RegistrasionPartner} />
            <Card name='Запросить товар' discription='Запросить товар с оптового склада' link='/items_request' symbol={Box} />
            <Card name='Учёт товаров' discription='Завести или списать товары в программе' link='/items_accounting' symbol={Audit} />
            <Card name='Передача бонусов' discription='Передать бонусы дистрибьюторам моей структуры' link='/bonus_transfers' symbol={Transfer} />
            <Card name='Список дистрибьюторов' discription='просмотреть список дистрибьюторов структуры' link='/distributors_list' symbol={Struct} />
        </div>
    )
}

export default MainCardGrid