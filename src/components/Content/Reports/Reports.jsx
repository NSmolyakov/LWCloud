import React from 'react'
import './Reports.css'


function Reports() {
    return(<div className='Reports'>
        <h1>Отчёты  </h1> 
        
        <div className='ReportsWrapper'>
            <div className='ReportsCategory'>
            <h3>Основные</h3>
                <ul>
                    <li>Основные</li>
                    <li>Отчёт директоров</li>
                    <li>Итоги периода</li>
                    <li>Распределение ЛО</li>
                </ul>
            </div>

            <div className='ReportsCategory'>
            <h3>Складские отчёты</h3>
                <ul>
                    <li>Текущие остатки</li>
                    <li>Остатки на дату</li>
                    <li>Обороты по товарам</li>
                    <li>Товарный расчёт и реализация</li>
                    <li>Реализация по складу</li>
                </ul>
            </div>

            <div className='ReportsCategory'>
            <h3>Структура</h3>
                <ul>
                    <li>Список дистрибьюторов</li>
                    <li>Новички структуры</li>
                    <li>Движение бонусов</li>
                    <li>Предварительный отчёт ЛО</li>
                    <li>Дисбаланс</li>
                </ul>
            </div>

            <div className='ReportsCategory'>
            <h3>Промоушены</h3>
                <ul>
                    <li>Клуб директоров</li>
                    <li>23+</li>
                    <li>WOW Leto</li>
                    <li>Промо 1+1</li>
                    <li>Архив</li>
                </ul>
            </div>

        </div>
    </div>
    )
}

export default Reports;