/******   IMPORTS ********/

import React from "react";
import { useState, useEffect } from "react";

/******   ICONOS DE REACT-ICONS ********/
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import 'tailwindcss/tailwind.css';






const Carousel = ({slides}) => {
    
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  /****    CONTROLES DE LOS BOTONES PARA PASAR DE SLIDE    ****/

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    /****    AUTO-SLIDER     ****/

    useEffect(() => {
      let autoScroll = setInterval( () => {
        nextSlide();
      }, 3000);
      return () => {
        clearTimeout(autoScroll)
      }
    }, [currentIndex])
    
    
  
    return (
      <div className='h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem] w-[80vw] relative group bg-center mx-auto'>
        <div
          className='w-full h-full bg-cover bg-center duration-500 rounded-lg'
          style={{ backgroundImage: `url(${slides[currentIndex].productImage})` }}
        ></div>
        {/* FLECHA IZQUIERDA */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* FLECHA DERECHA*/}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center w-full text-white'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Carousel