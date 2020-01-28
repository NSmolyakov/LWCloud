import React from 'react'
import InDev from'../../../assets/img/InDev.svg'
import './InDevelopment.css'

function InDevelopment() {
    return (<div className='NotFound'>
            <img src={InDev} alt='InDev' ></img>
            <h1>Страница находится в разработке</h1>

            <a href='/'>
                <button>На главную</button>
            </a>
            
        </div>)
}

export default InDevelopment;