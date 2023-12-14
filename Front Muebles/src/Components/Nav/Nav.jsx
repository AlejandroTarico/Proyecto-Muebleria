import React from 'react'
import { ROUTES } from '../../Helpers/RoutesPath'
import { NavLink } from 'react-router-dom'
import style from '../Nav/Nav.module.css'

export default function Nav() {
  return (
    <div className={style.divNav}>
       <ul className={style.ulLink}>
            <li><NavLink  to={ROUTES.INICIO}>Inicio</NavLink></li>
            <li><NavLink  to={ROUTES.NUESTROSMUEBLES}>Nuestros Muebles</NavLink></li>
            <li><NavLink  to={ROUTES.ABOUT}>Quienes Somos</NavLink></li>
            <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
        </ul>

    </div>
  )
}
