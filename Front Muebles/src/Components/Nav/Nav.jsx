import React from 'react'
import { ROUTES } from '../../Helpers/RoutesPath'
import { NavLink } from 'react-router-dom'
import style from '../Nav/Nav.module.css'

export default function Nav() {
  return (
    <div className='bg-neutral-100 bg-opacity-75 flex justify-center place-items-center fixed z-50 w-full'>
      <div className=''>
        <h2 className={style.logoNav}>TU LOGO</h2>
      </div>
      <div className=''>
        <div className='pt-5'>
          <input type="text" />
        </div>
        <div className='mt-4'>
          <ul className='w-[80vw] list-none flex justify-around'>
                <li><NavLink  to={ROUTES.HOME}>Inicio</NavLink></li>
                <li><NavLink  to={ROUTES.NUESTROSMUEBLES}>Nuestros Muebles</NavLink></li>
                <li><NavLink  to={ROUTES.ABOUT}>Quienes Somos</NavLink></li>
                <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
            </ul>
        </div>
      </div>

    </div>
  )
}
