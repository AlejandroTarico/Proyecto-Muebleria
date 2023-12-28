import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import style from '../Carrusel/Carrusel.module.css'

function Carrusel ({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <Slider {...settings}>
    //   {images.map((image, index) => (
    //     <div key={index}>
    //       <img src={image} alt={`Slide ${index}`} />
    //     </div>
    //   ))}
    // </Slider>
    <div className={style.custom_carousel}>
        {images.map((image, index) => (
        <div key={index} className={style.carousel_slide}>
            <img src={image} alt={`Slide ${index}`} />
        </div>
        ))}
    </div>
  );
};

export default Carrusel;