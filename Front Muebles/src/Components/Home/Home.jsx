import React from 'react'
import style from '../Home/Home.module.css'
import Carrusel from '../Carrusel/Carrusel';
import Slider from '../Slider/Slider';

function Home() {
  const images = [
    'https://www.rosado.com.tr/wp-content/uploads/2023/05/Muebles-de-sala.webp',
    'https://taxo.es/wp-content/uploads/2023/07/muebles-de-diseno-1024x576.jpg',
    'https://www.moblesamida.net/wp-content/uploads/2022/04/spacejoy-q3Qd86sfaoU-unsplash-1024x576.jpg',
  ];


  return (
    <div className={style.home_Background}>
      <h2 className={style.homeH2}>
      HOLA MUNDO 
      </h2>
      <div className="w-[90vw] rounded-xl shadow-[0px_5px_5px_5px_rgb(0,0,0,29%)]">
        <Carrusel images={images} />
      </div>
      <h2>tercer div</h2>
      <div className='w-full'>
        <Slider/>
      </div>
      
    </div>
  )
}

export default Home;