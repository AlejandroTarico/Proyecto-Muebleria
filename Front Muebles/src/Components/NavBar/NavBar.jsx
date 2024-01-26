import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../Helpers/RoutesPath'
import ModalContent from '../ModalContent/ModalContent';
import { useDispatch, useSelector } from 'react-redux';
import {openModal, closeModal} from '../../Redux/modalSlice';


function NavBar() {
  

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  
  const handleModalMouseEnter = () => {
    dispatch(openModal());
  };

  const handleModalMouseLeave = () => {
    dispatch(closeModal());
  };

  return (
    <div className='col-span-10 pt-1'>
        <ul className='list-none flex justify-around'>
            <li><NavLink  to={ROUTES.HOME}>Inicio</NavLink></li> 
            <li><NavLink  to={ROUTES.NUESTROSMUEBLES} onMouseEnter={handleModalMouseEnter}>Nuestros Muebles</NavLink></li>
            <li><NavLink  to={ROUTES.ABOUT} onMouseEnter={handleModalMouseLeave}>Quienes Somos</NavLink></li>
            <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
            <li><NavLink  to={ROUTES.MICOMBO}>Mi Combo</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar