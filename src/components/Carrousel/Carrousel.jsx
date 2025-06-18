import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Carousel = ({ images, isInModal }) => {
  const { pathname } = useHistory().location;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = (e) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const containerClass = isInModal 
    ? "relative w-full h-full overflow-hidden rounded-lg bg-[#333]"
    : `relative w-full h-full overflow-hidden rounded-lg bg-[#333] ${
        pathname.includes("projects") ? "" : "max-h-[532px]"
      }`;

  return (
    <div className={containerClass}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <img
            src={images[currentIndex]}
            className={`${isInModal ? 'max-h-[80vh] max-w-full' : 'max-w-full max-h-full'} object-contain`}
            alt={`Slide ${currentIndex}`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-10">
        <motion.button
          className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white transform transition-transform hover:scale-110"
          onClick={(e) => handlePrevious(e)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoIosArrowBack size={24} />
        </motion.button>

        <motion.button
          className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white transform transition-transform hover:scale-110"
          onClick={(e) => handleNext(e)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoIosArrowForward size={24} />
        </motion.button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
