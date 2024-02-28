import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../Helpers/RoutesPath'
import { useDispatch} from 'react-redux';
import {openModal, closeModal} from '../../Redux/modalSlice';


function NavBar() {
  

  const dispatch = useDispatch();

  
  const handleModalMouseEnter = () => {
    dispatch(openModal());
  };

  const handleModalMouseLeave = () => {
    dispatch(closeModal());
  };

  return (
    <div className='col-span-10 pt-1'>
        <div className='list-none flex justify-around'>
          <NavLink  to={ROUTES.HOME} onMouseEnter={handleModalMouseLeave}>Inicio</NavLink>
          <NavLink className='flex' to={ROUTES.NUESTROSMUEBLES} onMouseEnter={handleModalMouseEnter}>
            Nuestros Muebles 
            <svg className="h-7 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
              <path stroke="none" d="M0 0h24v24H0z"/>  
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </NavLink>
          <NavLink  to={ROUTES.ABOUT} onMouseEnter={handleModalMouseLeave}>Quienes Somos</NavLink>
          <NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink>
          <NavLink  to={ROUTES.MICOMBO}>Contáctanos</NavLink>
        </div>
    </div>
  )
}

export default NavBar