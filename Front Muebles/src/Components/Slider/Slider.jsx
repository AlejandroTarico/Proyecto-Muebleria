import React from 'react'
import Scroll from './Scroll'

function Slider() {

  const sillas = [
    'https://tengomueblesalamanca.com/wp-content/uploads/2020/10/098C-compress.png',
    'https://i.pinimg.com/736x/a1/9c/94/a19c9465085f22b35c265e60a65947d4.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_932628-MLA71789106601_092023-O.webp',
    'https://media.v2.siweb.es/uploaded_thumb_medium/a4eaa8c820f94c96bd8e6e30096ae518/silla_confort_2.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_702087-MLA48537345240_122021-O.webp',
    'https://www.mobiliariodehosteleria.com/11067-large_default/silla-de-madera-almonte.jpg'
  ]
  const sillasSlider = [...sillas, ...sillas]

  return (
    <div className='container'>
      <div className='overflow-hidden w-full'>
        <div className='flex whitespace-nowrap animate-scroll'>
          {
            sillasSlider.map((carr) => (
              <Scroll carr={carr} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Slider