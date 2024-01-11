import React from 'react'
import Scroll from './Scroll'

function Slider() {

  const sillas = [
    'https://www.torca.com.ar/images/00000000000590849486559084.jpg',
    'https://www.taburetes.com/6785-medium_default/silla-de-madera-ref-190.jpg',
    'https://mobelo.com.mx/wp-content/uploads/2022/09/antecomedor-manchester-silla-204s-mobelo-muebles.jpg',
    'https://www.torca.com.ar/thumb/00000000000590829465259082_400x400.jpg',
    'https://sillastapizadas.com/1813-large_default/silla-mallorca.jpg',
    'https://www.torca.com.ar/images/000000000005908593786Silla-Recta-120-Roble.jpg'
  ]
  const sillasSlider = [...sillas, ...sillas]

  return (
    <div className='container'>
      <div className='overflow-hidden w-full'>
        <div className='flex whitespace-nowrap animate-scroll'>
          {
            sillasSlider.map((carr, index) => (
              <Scroll key={index} carr={carr} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Slider