import React from 'react'
import { NavLink } from 'react-router-dom'
import './LogIn.css'
import dataVisualization from '../../../assets/img/dataVisualization.svg'

function LogIn (){
    return(<div className='login'>
      <div className='formField'>
        <div className='formContent'>
        <h1>Вход</h1>
        <form>
          <label>
            Номер договора:
            <br />
            <input type="text" name="Number" placeholder='Введите № договора' maxlength='12' />
          </label>
          <br />
          <label>
            Пароль:
            <br />
          <input type="password" name="password" placeholder='Введите Ваш пароль' />
          </label>
          <br/>
          <NavLink to='/'><button>Вход</button></NavLink>

          <p>Забыли пароль?</p>
        </form>
        </div>
      </div>
       
       <div className='loginImg'>
         <img src={dataVisualization} alt="dataVisualization"/>
       </div>
       

        </div>
    )
}

export default LogIn