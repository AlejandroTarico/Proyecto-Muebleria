import React from 'react'
import style from '../Home/Home.module.css'
import Carrusel from '../Carrusel/Carrusel';
import Slider from '../Slider/Slider';

function Home() {
  const images = [
    'https://myoc.es/wp-content/uploads/2022/07/40000-amb-A5-salon-Modular-Studio-5-1024x576.jpg',
    'https://taxo.es/wp-content/uploads/2023/07/muebles-de-diseno-1024x576.jpg',
    'https://www.moblesamida.net/wp-content/uploads/2022/04/spacejoy-q3Qd86sfaoU-unsplash-1024x576.jpg',
    'https://www.losbarriales.com/wp-content/uploads/2023/06/20230117_115121-1024x576.jpg',
  ];


  return (
    <div className=' pt-28 pb-16 bg-gray-200'>
      <div className="container rounded-xl shadow-[0px_5px_5px_5px_rgb(0,0,0,29%)]">
        <Carrusel images={images} />
      </div>
      <div className='pt-4 h-32 flex items-center justify-center'>
        <h2 className=' font-josefin text-[3rem] border-b-2 border-slate-500 px-96'>Productos</h2>
      </div>
      <div className='w-full'>
        <Slider/>
      </div>
      
    </div>
  )
}

export default Home;