import React from 'react'

function Scroll({carr}) {
  return (
    <div className='h-full w-[255px] m-2 flex-shrink-0 cursor-pointer shadow-[3px_5px_7px_0px_rgb(0,0,0,29%)] rounded-t-xl bg-[#5fa095] text-white'>
        <div className='rounded-3x1 overflow-hidden mb-4 relative h-[250px] bg-white rounded-t-xl'>
            <img src={carr.img} alt="" />
        </div>
        <div className=' m-2 font-josefin italic h-32'>
            <h3 className='font-bold text-2xl'>{carr.title}</h3>
            <p className='whitespace-normal font-normal text-lg'>{carr.description}</p>
            <p className='font-bold text-2xl'>$250</p>
        </div>
    </div>
  )
}

export default Scroll