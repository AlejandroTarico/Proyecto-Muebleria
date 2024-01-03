import React, { useEffect, useState } from 'react';
import style from '../Carrusel/Carrusel.module.css'

function Carrusel ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
    
        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
      }, [images.length]);
  
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                    <img src={image} alt={`Slide ${index}`} className="w-full"/>
                </div>
            ))}
            </div>
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`h-2 w-2 mx-1 bg-gray-500 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : ''}`}
                    onClick={() => handleDotClick(index)}
                />
                ))}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 cursor-pointer" onClick={handlePrev}>
                Prev
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 cursor-pointer" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Carrusel;