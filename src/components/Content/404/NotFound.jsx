import React from 'react'
import NotFoundSVG from'../../../assets/img/NotFound.svg'
import './NotFound.css'

function NotFound() {
    return (<div className='NotFound'>
            <img src={NotFoundSVG} alt='404' ></img>
            <h1>Страница не найдена</h1>

            <a href='/'>
                <button>На главную</button>
            </a>
            
        </div>)
}

export default NotFound;