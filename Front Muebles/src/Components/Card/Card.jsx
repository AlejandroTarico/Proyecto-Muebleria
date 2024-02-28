import React, { useState } from 'react'

// export default function Card({destacados}) {
//   return (
//     <div className='border-white border-4 rounded-lg'>
//         <img src={destacados} alt="Imagen Perdida" className='rounded-lg'/>
//         <div>
//             Esto va a aparecer
//         </div>
//     </div>
//   )
// }

export default function Card({ destacados }) {
    const [hovered, setHovered] = useState(false);
  
    return (
        <div className='border-white border-4 rounded-lg relative overflow-hidden' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img src={destacados} alt="Imagen Perdida" className={`rounded-lg transition-transform duration-300 ${hovered ? 'scale-110' : ''}`}/>
          <div className={`absolute inset-0  flex items-center justify-center bg-black bg-opacity-75 text-white duration-300 ${hovered ? 'top-36' : 'top-full'}`}>
            <div className={`absolute inset-0 ${hovered ? 'top-6' : 'top-full'}`}>
                <p>Información necesaria para cada imagen</p>
                <p>Información necesaria para cada imagen</p>
            </div>
          </div>
        </div>
      );
  }