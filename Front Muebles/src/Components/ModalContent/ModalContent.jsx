import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {openModal, closeModal} from '../../Redux/modalSlice';


function ModalContent() {
  
  const dispatch = useDispatch();
  // const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  
  const handleModalMouseEnter = () => {
    dispatch(openModal());
  };

  const handleModalMouseLeave = () => {
    dispatch(closeModal());
  };


  return (
    <div> 
        {/* 'h-36 w-1/2 inline-block bg-orange-600' */}
        <div className='h-36 w-1/2 inline-block bg-orange-600'  onMouseLeave={handleModalMouseLeave}>
        </div>
    
    </div>
  )
}

export default ModalContent