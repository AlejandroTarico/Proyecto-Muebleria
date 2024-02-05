import React from 'react'

export default function Card({destacados}) {
  return (
    <div className='border-white border-4 rounded-lg'>
        <img src={destacados} alt="" className='rounded-lg'/>
    </div>
  )
}
