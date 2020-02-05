import React from 'react'
import Ellipse from '../../assets/img/Cards/Ellipse.svg'
import ListZakazov from '../../assets/img/Cards/ListZakazov.svg'
import './Card.css'
import { NavLink } from 'react-router-dom'


function Card(props){
    return(
    <NavLink to={props.link}>
    <div className='Card'>
        <img src={Ellipse} className='Ellipse' alt='Ellipse'></img>
        <img src={ListZakazov} className='ListZakazov' alt='ListZakazov'></img>
        <p className='CardTitle link'> {props.name}</p>
        <p className='CardDiscription'> {props.discription} </p>
    </div>
    </NavLink>)
}

export default Card