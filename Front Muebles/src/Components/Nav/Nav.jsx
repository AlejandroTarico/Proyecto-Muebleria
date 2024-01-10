import React from 'react'
import { ROUTES } from '../../Helpers/RoutesPath'
import { NavLink } from 'react-router-dom'
import style from '../Nav/Nav.module.css'
import Search from '../Search/Search'

export default function Nav() {
  return (
    <div className='bg-neutral-100 bg-opacity-75 flex justify-center place-items-center fixed z-50 w-full'>
      <div className='container grid grid-cols-1 md:grid-cols-5'>

        <div className='m-2 col-span-1 flex items-center justify-center'>
          <h2 className='text-5xl text-center'>TU LOGO</h2>
        </div>
        <div className='col-span-4'>
          <div className='pt-5 text-right flex justify-end'>
            <Search/>
          </div>
          <div className='mt-4 mb-1'>
            <ul className=' list-none flex justify-around'>
                  <li><NavLink  to={ROUTES.HOME}>Inicio</NavLink></li>
                  <li><NavLink  to={ROUTES.NUESTROSMUEBLES}>Nuestros Muebles</NavLink></li>
                  <li><NavLink  to={ROUTES.ABOUT}>Quienes Somos</NavLink></li>
                  <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
                  <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
              </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
