import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "../../Carrousel/Carrousel";
import rombo_fill from '../../../assets/Icons/rombo_fill.webp'
import rombo_unfill from '../../../assets/Icons/rombo_unfill.webp'
import Tooltip from '../../Tooltip/Tooltip'
import useModal from '../../../hooks/useModal/useModal'
import ImageModal from '../../Modal/ImageModal/ImageModal'

export default function CardProjects({ project }) {
  const { title, description, technologies, aplication, code, images, responsive } = project;
  const romboFillLength = Array.from({ length: responsive });
  const romboUnfillLength = Array.from({ length: 5 - responsive });
  const [seeMore, setSeeMore] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [textOverflows, setTextOverflows] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && containerRef.current) {
        const isOverflowing = textRef.current.scrollHeight > containerRef.current.clientHeight;
        setTextOverflows(isOverflowing);
      }
    };
    
    checkOverflow();
    
    window.addEventListener('resize', checkOverflow);
    window.addEventListener('load', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
      window.removeEventListener('load', checkOverflow);
    };
  }, [description]);

  const handleSeeMoreToggle = () => {
    setSeeMore(!seeMore);
  };

  return (
    <>
      <ImageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <Carousel images={images} isInModal={true} />
      </ImageModal>
      
      <motion.div 
        className="relative bg-[#0e141b] rounded-xl p-8 shadow-2xl border border-[#253447] min-h-[650px] flex flex-col"
      >
        <div className="flex flex-col lg:flex-row gap-10 flex-grow">
          <div className="lg:w-[60%] w-full flex flex-col">
            <motion.h1 
              className="font-bold text-3xl text-[#ecd85d] pb-4 border-b-2 border-[#253447] mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>

            <div 
              ref={containerRef} 
              className="flex-grow overflow-hidden"
              style={{ maxHeight: seeMore ? 'none' : '520px' }}
            >
              <div ref={textRef} className="prose prose-lg text-white">
                {description}
              </div>
            </div>

            {!seeMore && textOverflows && (
              <div className="h-16 bg-gradient-to-t from-[#0e141b] to-transparent w-full mt-[-64px] relative z-10"></div>
            )}
          </div>

          <div className="lg:w-[40%] w-full flex flex-col justify-between">
            <div className="space-y-4">
              <div 
                className="rounded-lg overflow-hidden shadow-xl h-[300px] cursor-pointer hover:opacity-90 transition-opacity"
                onClick={openModal}
              >
                <Carousel images={images} />
              </div>

              <motion.div 
                className="flex items-center justify-center gap-2 bg-[#1a2433] p-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-Montserrat text-[#ecd85d] font-semibold">Responsive: </h2>
                <div className="flex gap-1">
                  {romboFillLength.map((e, i) => (
                    <motion.img 
                      key={`rombo ${i}`} 
                      src={rombo_fill} 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="w-4 h-4"
                    />
                  ))}
                  {romboUnfillLength.map((e, i) => (
                    <motion.img 
                      key={`rombo2 ${i}`} 
                      src={rombo_unfill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (romboFillLength.length + i) * 0.1 }}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap justify-center gap-2 bg-[#1a2433] p-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {technologies.map((Technology, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setHoveredTech(Technology)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-2 bg-[#253447] rounded-lg transition-colors hover:bg-[#304054] shadow-md">
                      {Technology}
                    </div>
                    {hoveredTech === Technology && <Tooltip text={Technology.type?.name || ""} />}
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-col gap-3 mt-2">
                <motion.div 
                  className="flex items-center justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#ecd85d", color: "#0e141b" }}
                    whileTap={{ scale: 0.95 }}
                    rel="noreferrer"
                    target="_blank"
                    className="flex-1 text-center border-2 px-6 py-2 border-[#ecd85d] text-[#ecd85d] rounded-lg font-bold transition-all hover:shadow-lg max-w-[150px] bg-[#0e141b]"
                    href={aplication}
                  >
                    Ver aplicación
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#ecd85d", color: "#0e141b" }}
                    whileTap={{ scale: 0.95 }}
                    rel="noreferrer"
                    target="_blank"
                    className="flex-1 text-center border-2 px-6 py-2 border-[#ecd85d] text-[#ecd85d] rounded-lg font-bold transition-all hover:shadow-lg max-w-[150px] bg-[#0e141b]"
                    href={code}
                  >
                    Ver código
                  </motion.a>
                </motion.div>
                
                {textOverflows && (
                  <motion.div className="flex justify-center">
                    <motion.button 
                      onClick={handleSeeMoreToggle} 
                      className="text-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#0e141b] transition-all duration-300 font-bold bg-[#0e141b] border-2 border-[#ecd85d] px-6 py-2 rounded-lg shadow-lg max-w-[150px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {seeMore ? "Ver menos" : "Ver mas"}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}