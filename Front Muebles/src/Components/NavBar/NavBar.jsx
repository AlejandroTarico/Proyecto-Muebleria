import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../Helpers/RoutesPath'



function NavBar() {
  return (
    <div className='col-span-10 pt-1'>
        <ul className='list-none flex justify-around'>
            <li><NavLink  to={ROUTES.HOME}>Inicio</NavLink></li>
            <li><NavLink  to={ROUTES.NUESTROSMUEBLES}>Nuestros Muebles</NavLink></li>
            <li><NavLink  to={ROUTES.ABOUT}>Quienes Somos</NavLink></li>
            <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
            <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar