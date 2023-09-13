import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='relative flex justify-center'>
      <button
        onClick={previousImage}
        className="bg-black text-color-2 hover:bg-[#ecd85d] hover:text-black w-[50px] max-[900px]:absolute max-[900px]:left-0 max-[900px]:h-full max-[900px]:w-[50%] max-[900px]:opacity-0">
        <AiOutlineArrowLeft className='w-full h-full' />
      </button>

      <figcaption>
        <img
          src={images[currentImageIndex]}
          alt="imagenProject"
        />
      </figcaption>

      <button
        onClick={nextImage}
        className="bg-black text-color-2 hover:bg-[#ecd85d] hover:text-black w-[50px] max-[900px]:absolute max-[900px]:right-0 max-[900px]:h-full max-[900px]:opacity-0 max-[900px]:w-[50%] ">
        <AiOutlineArrowRight className='w-full h-full' />
      </button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => selectImage(index)}
            className={`w-2 h-2 mx-1 rounded-full hover:cursor-pointer ${index === currentImageIndex ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
