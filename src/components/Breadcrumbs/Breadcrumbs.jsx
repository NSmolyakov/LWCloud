import React from 'react'
import Arrow from '../../assets/img/Arrow.svg'
import './Breadcrumbs.css'


function Breadcrumbs(){
    return(
        <div className='Breadcrumbs'><a href='/' >Главная</a> <img src={Arrow} alt='arrow' ></img></div>
    )
}

export default Breadcrumbs;