import { useState } from 'react'
import useModal from '../../../hooks/useModal/useModal'
import ImageModal from '../../Modal/ImageModal/ImageModal'
import Carrousel from '../../Carrousel/Carrousel'
import { AiOutlineStar } from 'react-icons/ai';
import Tooltip from '../../Tooltip/Tooltip';

export default function OtherCard({ project }) {

  const { title, description, technologies, aplication, code, images, featured, } = project
  const { isOpen, openModal, closeModal } = useModal()

  const [seeMore, setSeeMore] = useState(false)
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
      <ImageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <Carrousel images={images} />
      </ImageModal>
      <div className='border-2 font-Montserrat flex flex-col px-2 py-5 gap-2 relative'>

        <h1 className="font-bold text-2xl text-color-2 text-center">
          {title}
        </h1>
        <AiOutlineStar className={`${!featured && "hidden"} absolute left-2 top-2 w-6 h-6 text-color-2`} />

        <div>
          <img src={images[0]} alt="imagenPrincipal" className="w-[350px] h-[350px] object-contain hover:opacity-40 hover:cursor-pointer z-30 hover:z-10 float-left hidden min-[933px]:flex" onClick={openModal} />

          <div className={`${seeMore && "line-clamp-none"} line-clamp-[9] max-[932px]:text-center pl-2`}>
            {description}
          </div>

          <div>
            <button className=" text-color-2 transition-colors duration-300 hover:opacity-50 font-extralight flex justify-start max-[932px]:w-full max-[932px]:justify-center pl-2 max-[932px]:pl-0" onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? "Ver menos" : "Ver más..."}
            </button>
            <div className='relative flex justify-center items-center min-[933px]:hidden'>
              <img
                src={images[0]}
                alt="imagenPrincipal"
                className="hover:opacity-40 hover:cursor-pointer z-30 hover:z-10"
                onClick={openModal}
              />
              <h1 className="absolute font-Montserrat text-2xl text-white font-bold z-20">
                Ver imágenes
              </h1>
            </div>
            <div className='flex flex-col max-[1150px]:hidden gap-5'>
              <div className='flex items-center justify-center gap-2'>
                {technologies.map((Technology, techIndex) => (
                  <div
                    onMouseEnter={() => setHoveredTech(Technology)}
                    onMouseLeave={() => setHoveredTech(null)}
                    key={techIndex}
                    className="flex flex-col justify-center items-center relative ">
                    {hoveredTech === Technology && <Tooltip text={Technology.type.name} />}
                    {Technology}
                  </div>
                ))}
              </div>

              <div className="font-Montserrat flex justify-center w-full items-center gap-10">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="border-2 p-2 border-[#ecd85d] text-color-2 hover:bg-[#ecd85d] hover:text-[#181607] font-extrabold"
                  href={aplication}
                >
                  Ver aplicación
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-color-2 hover:text-[#181607] font-extrabold"
                  href={code}
                >
                  Ver código
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className='flex flex-col min-[1151px]:hidden'>
          {/* <div className='flex items-center justify-center gap-2 mb-2'>
            {technologies.map((technology, techIndex) => (
              <div key={techIndex}>{technology}</div>
            ))}
          </div> */}

          <div className='flex items-center justify-center gap-2 mb-2'>
            {technologies.map((Technology, techIndex) => (
              <div
                onMouseEnter={() => setHoveredTech(Technology)}
                onMouseLeave={() => setHoveredTech(null)}
                key={techIndex}
                className="flex flex-col justify-center items-center relative ">
                {hoveredTech === Technology && <Tooltip text={Technology.type.name} />}
                {Technology}
              </div>
            ))}
          </div>

          <div className="font-Montserrat flex justify-center w-full items-center gap-10">
            <a
              rel="noreferrer"
              target="_blank"
              className="border-2 p-2 border-[#ecd85d] text-color-2 hover:bg-[#ecd85d] hover:text-[#181607] font-extrabold"
              href={aplication}
            >
              Ver aplicación
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-color-2 hover:text-[#181607] font-extrabold"
              href={code}
            >
              Ver código
            </a>
          </div>
        </div>
      </div >
    </>

  )
}