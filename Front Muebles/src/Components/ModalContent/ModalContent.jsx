import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {openModal, closeModal} from '../../Redux/modalSlice';


function ModalContent() {
  
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  
  const handleModalMouseEnter = () => {
    dispatch(openModal());
  };

  const handleModalMouseLeave = () => {
    dispatch(closeModal());
  };


  return (
    <div> 
        {/* 'h-36 w-1/2 inline-block bg-orange-600' */}
        <div className={`${isModalOpen ? 'opacity-100 visible duration-500' : 'opacity-0 invisible duration-[500ms]'} h-36 w-1/2 inline-block bg-gray-400 rounded-xl`}  onMouseLeave={handleModalMouseLeave}>
        </div>
    
    </div>
  )
}

export default ModalContent