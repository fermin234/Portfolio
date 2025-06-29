import { useState, useRef, useEffect } from 'react';
import useModal from '../../../hooks/useModal/useModal';
import ImageModal from '../../Modal/ImageModal/ImageModal';
import Carrousel from '../../Carrousel/Carrousel';
import { AiOutlineStar } from 'react-icons/ai';

export default function OtherCard({ project }) {
  const {
    title,
    description,
    technologies,
    aplication,
    code,
    images,
    featured,
  } = project;
  const { isOpen, openModal, closeModal } = useModal();

  const [seeMore, setSeeMore] = useState(false);
  const [textOverflows, setTextOverflows] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (textRef.current && containerRef.current && !seeMore) {
      const isOverflowing =
        textRef.current.scrollHeight > containerRef.current.clientHeight;
      setTextOverflows(isOverflowing);
    }
  }, [description, seeMore]);

  const handleSeeMoreToggle = () => {
    setSeeMore(!seeMore);
  };

  return (
    <>
      <ImageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <Carrousel images={images} isInModal={true} />
      </ImageModal>
      <div className="border-2 font-Montserrat flex flex-col px-2 py-5 gap-2 relative border-[#253447] bg-[#0e141b] rounded-lg">
        <h1 className="font-bold text-2xl text-[#ecd85d] text-center">
          {title}
        </h1>
        <AiOutlineStar
          className={`${
            !featured && 'hidden'
          } absolute left-2 top-2 w-6 h-6 text-[#ecd85d]`}
        />

        <div className="relative">
          <img
            src={images[0]}
            alt="imagenPrincipal"
            className="w-[350px] h-[350px] object-contain hover:opacity-40 hover:cursor-pointer z-30 hover:z-10 float-left hidden min-[933px]:block mr-4 mb-4"
            onClick={openModal}
          />

          <div
            ref={containerRef}
            className={`${seeMore ? '' : 'overflow-hidden'}`}
            style={{
              maxHeight: seeMore ? 'none' : '400px'
            }}
          >
            <div
              ref={textRef}
              className="prose prose-lg text-white pl-2"
            >
              {description}
              {seeMore && (
                <div className="clear-both w-full"></div>
              )}
            </div>
          </div>

          {!seeMore && textOverflows && (
            <div className="h-16 bg-gradient-to-t from-[#0e141b] to-transparent w-full mt-[-64px] relative z-10"></div>
          )}

          {textOverflows && (
            <button
              className="text-[#ecd85d] transition-colors duration-300 hover:opacity-50 font-extralight flex justify-start max-[932px]:w-full max-[932px]:justify-center pl-2 max-[932px]:pl-0 mt-2 clear-both"
              onClick={handleSeeMoreToggle}
            >
              {seeMore ? 'Ver menos' : 'Ver más...'}
            </button>
          )}

          <div className="relative flex justify-center items-center min-[933px]:hidden mt-4">
            <img
              src={images[0]}
              alt="imagenPrincipal"
              className="hover:opacity-40 hover:cursor-pointer z-30 hover:z-10 max-w-full"
              onClick={openModal}
            />
            <h1 className="absolute font-Montserrat text-2xl text-white font-bold z-20">
              Ver imágenes
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 bg-[#1a2433] p-2 rounded-lg shadow-lg mt-4 z-20 relative">
          {technologies.map((Technology, techIndex) => (
            <div key={techIndex} className="relative">
              <div className="p-2 bg-[#253447] rounded-lg transition-colors hover:bg-[#304054] shadow-md">
                {Technology}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col max-[1150px]:hidden gap-5 mt-4">
          <div className="font-Montserrat flex justify-center w-full items-center gap-10">
            <a
              rel="noreferrer"
              target="_blank"
              className="border-2 p-2 border-[#ecd85d] text-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#0e141b] font-extrabold"
              href={aplication}
            >
              Ver aplicación
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-[#ecd85d] hover:text-[#ecd85d] font-extrabold"
              href={code}
            >
              Ver código
            </a>
          </div>
        </div>

        <div className="flex flex-col min-[1151px]:hidden">
          <div className="font-Montserrat flex justify-center w-full items-center gap-10">
            <a
              rel="noreferrer"
              target="_blank"
              className="border-2 p-2 border-[#ecd85d] text-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#0e141b] font-extrabold"
              href={aplication}
            >
              Ver aplicación
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-[#ecd85d] hover:text-[#ecd85d] font-extrabold"
              href={code}
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
