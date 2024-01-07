import React from 'react'

function Scroll({carr}) {
  return (
    <div className='h-full w-[240px] m-2 flex-shrink-0 cursor-pointer shadow-[3px_5px_7px_0px_rgb(0,0,0,29%)] rounded-t-[1rem] bg-gray-300'>
        <div className='rounded-3x1 overflow-hidden mb-4 relative h-[250px] bg-white rounded-t-[1rem]'>
            <img src={carr} alt="" />
        </div>
        <div className='text-left m-2 font-josefin italic'>
            <h3 className='font-bold'>Titulo: <span className='font-normal'>Silla de madera</span></h3>
            <p className='whitespace-normal'><span className='font-bold'>Descripción: </span> Lorem ipsum dolor sit amet consectetur adipiscing</p>
            <p><span className='font-bold'>Precio: </span>$250</p>
        </div>
    </div>
  )
}

export default Scroll