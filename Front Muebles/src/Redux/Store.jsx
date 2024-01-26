import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';

const Store = configureStore({
  reducer: {
    modal: modalSlice,
    // Otros reducers si los tienes
  },
});

export default Store