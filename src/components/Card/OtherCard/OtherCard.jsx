import { useState } from 'react'
import useModal from '../../../hooks/useModal/useModal'
import ImageModal from '../../Modal/ImageModal/ImageModal'
import Carrousel from '../../Carrousel/Carrousel'

export default function OtherCard({ project }) {

  const { title, description, technologies, aplication, code, images, featured, } = project
  const { isOpen, openModal, closeModal } = useModal()

  const [seeMore, setSeeMore] = useState(false)

  return (
    <>
      <ImageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <div className='relative mx-10'>
          <button className='absolute top-3 right-3 text-[#ecd85d] bg-color-4 rounded-md hover:bg-[#ecd85d] hover:text-[#807970] p-3 font-Montserrat font-bold z-[100] text-3xl' onClick={closeModal}>
            X
          </button>
          <Carrousel images={images} />
        </div>
      </ImageModal>
      <div className='border-2 font-Montserrat flex flex-col px-2 py-5 gap-2'>
        <h1 className="font-bold text-2xl text-color-2 text-center">
          {title}
        </h1>
        <div className="grid grid-cols-2 max-[933px]:grid-cols-1 justify-start items-start min-h-[65%] gap-2">
          <div className='relative flex justify-center items-center max-[933px]:hidden'>
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

          <div className='h-full flex flex-col min-[933px]:justify-between gap-5'>
            <div>
              <p className={`${seeMore ? "line-clamp-none" : "line-clamp-[8]"} max-[933px]:text-center`}>{description}
              </p>
              <button className="mt-2 text-color-2 transition-colors duration-300 hover:opacity-50 font-extralight flex justify-start" onClick={() => setSeeMore(!seeMore)}>
                {seeMore ? "Ver menos" : "Ver más..."}
              </button>
            </div>
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
            <div className='flex flex-col min-[1600px]:hidden gap-5'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                {technologies.map((technology, techIndex) => (
                  <div key={techIndex}>{technology}</div>
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
        <div className='flex flex-col max-[1600px]:hidden'>
          <div className='flex items-center justify-center gap-2 mb-2'>
            {technologies.map((technology, techIndex) => (
              <div key={techIndex}>{technology}</div>
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
    </>

  )
}