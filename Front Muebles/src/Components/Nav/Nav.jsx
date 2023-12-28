import React from 'react'
import { ROUTES } from '../../Helpers/RoutesPath'
import { NavLink } from 'react-router-dom'
import style from '../Nav/Nav.module.css'

export default function Nav() {
  return (
    <div className={style.divNav}>
      <div className={style.conainterItems}>
        <h2 className={style.logoNav}>TU LOGO</h2>
      </div>
      <div className={style.conainterItems}>
        <ul className={style.ulLink}>
              <li><NavLink  to={ROUTES.HOME}>Inicio</NavLink></li>
              <li><NavLink  to={ROUTES.NUESTROSMUEBLES}>Nuestros Muebles</NavLink></li>
              <li><NavLink  to={ROUTES.ABOUT}>Quienes Somos</NavLink></li>
              <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
          </ul>
      </div>

    </div>
  )
}
