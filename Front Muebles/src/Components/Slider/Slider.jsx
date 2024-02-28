import React, { useState } from 'react'
import Scroll from './Scroll'

function Slider() {

  const sillas = [ {
    id: 1,
    img:'https://www.torca.com.ar/images/00000000000590849486559084.jpg',
    title: 'Silla de madera',
    description: 'Silla de madera marron con tapizado blanco',
  },
  {
    id:2,
    img:'https://www.taburetes.com/6785-medium_default/silla-de-madera-ref-190.jpg',
    title: 'Silla de madera',
    description: 'Silla torneada con tapizado de paja'
  },
  {
    id:3,
    img:'https://www.dualequipamientos.com.ar/wp-content/uploads/2021/02/Silla-Canis-Lustre-cedro.jpg',
    title: 'Silla de madera',
    description: 'Silla de madera elegante marron tapizada'
  },
  {
    id:4,
    img:'https://www.torca.com.ar/thumb/00000000000590829465259082_400x400.jpg',
    title: 'Silla de madera',
    description: 'Silla marron con espaldar de madera torneada redonda'
  },
  {
    id:5,
    img:'https://sillastapizadas.com/1813-large_default/silla-mallorca.jpg',
    title: 'Silla de madera',
    description: 'Silla con estilo',
  },
  {
    id:6,
    img:'https://www.torca.com.ar/images/000000000005908593786Silla-Recta-120-Roble.jpg',
    title: 'Silla de madera',
    description: 'Silla simple color barniz'
  },
  ]
  const sillasSlider = [...sillas, ...sillas]

  return (
    <div className='container'>
      <div className='overflow-hidden w-full'>
        <div className='flex whitespace-nowrap animate-scroll'>
          {
            sillasSlider.map((carr, index) => (
              <Scroll key={index} carr={carr}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider