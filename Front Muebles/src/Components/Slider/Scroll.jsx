import React from 'react'

function Scroll({carr}) {
  return (
    <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
        <div className='rounded-3x1 overflow-hidden mb-4 relative h-[250px]'>
            <img src={carr} alt="" />
        </div>
    </div>
  )
}

export default Scroll