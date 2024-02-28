import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
import NavBar from '../NavBar/NavBar'
import ModalContent from '../ModalContent/ModalContent'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../Redux/modalSlice'

export default function Nav() {

  // const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  const handleModalMouseEnter = () => {
    dispatch(closeModal());
  };


  return (
    <div className=' fixed z-50 w-full'>
      <div className='bg-[#5fa095] bg-opacity-80 text-white'>
        <div className='container grid grid-cols-1 md:grid-cols-5'>

          <div className='m-2 col-span-1 flex items-center justify-center'>
            <h2 className='text-5xl text-center'>TU LOGO</h2>
          </div>
          <div className='col-span-4'>
            <div className='pt-5 text-right flex justify-end' onMouseEnter={handleModalMouseEnter}>
              <Search/>
            </div>
            <div className='mt-4 mb-1'>
              <div className='grid grid-cols-12'>
                <NavBar/>
                <div className='col-span-2 flex justify-between ml-11'>
                  <NavLink> {/* IMPORTANTE: este es el botón o icono para el carrito */}
                    <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </NavLink>
                  <div className='border-r-2 border-white'>

                  </div>
                  <button> {/* IMPORTANTE: este es el botón o icono para acceder o crearse una cuenta */}
                    <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalContent />
    </div>
  )
}
