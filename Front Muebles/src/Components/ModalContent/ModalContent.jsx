import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {openModal, closeModal} from '../../Redux/modalSlice';
import {Link} from 'react-router-dom'
import { ROUTES } from '../../Helpers/RoutesPath';


function ModalContent() {
  
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleModalMouseLeave = () => {
    dispatch(closeModal());
  };

  const listMuebles = [
    {
      id: 0,
      title: 'Muebles de Cocina',
      elements: {0: 'Alacena', 1: 'Bajo Mesada', 2: 'Isla', 3: 'Especiero', 4: 'Despensa'}
    },
    {
      id: 1,
      title: 'Muebles de Comedor',
      elements: {0: 'Mesa', 1: 'Sillas', 2: 'Modular', 3: 'Mesa de Televisor'}
    },
    {
      id: 2,
      title: 'Sala de Estar',
      elements: {0: 'Sillones', 1: 'Mesa Ratonera', 2: 'Mesita Esquinera', 3: 'Recibidores', 4: 'Repisas Flotantes'}
    }

  ];

  return (
    <div className={`${isModalOpen ? 'opacity-95 visible h-auto w-auto duration-500' : 'opacity-0 invisible duration-[500ms] h-0 '}  inline-block `}  onMouseLeave={handleModalMouseLeave}>
      <div className="grid grid-cols-3 gap-2 font-josefin bg-slate-100 rounded-xl">
        {listMuebles.map((mueble, index) => (
          <div className=' text-left px-9 py-6' key={index}>
            <h2 className='text-lg font-bold border-b-2 border-b-black mb-3'>{mueble.title}</h2>
            <ul>
              {Object.values(mueble.elements).map((item, i) => (
                <li className='text-base font-medium mb-1 cursor-pointer' key={i} onClick={handleModalMouseLeave}>
                  <Link to={ROUTES.SECCION + "/" + mueble.title.replace(/\s+/g, '-') + "/" + item.replace(/\s+/g, '-')}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModalContent