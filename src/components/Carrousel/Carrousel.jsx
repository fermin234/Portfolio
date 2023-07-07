import React, { useState } from 'react';

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
    <div className="relative flex justify-center items-center">
      <img
        src={images[currentImageIndex]}
        alt="imagenProject"
        className='scale-90'
      />

      <button
        onClick={previousImage}
        className="absolute left-[6%] top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        {'<'}
      </button>

      <button
        onClick={nextImage}
        className="absolute right-[6%] top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        {'>'}
      </button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => selectImage(index)}
            className={`w-2 h-2 mx-1 rounded-full hover:cursor-pointer ${index === currentImageIndex ? 'bg-black' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
