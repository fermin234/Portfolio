export default function Educacion() {
  return (
    <section id="educacion" className="bg-color-4 w-full min-h-screen py-[4vh] flex flex-col justify-center items-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3">EDUCACIÓN</h1>
      <div className="flex gap-10 max-[1260px]:flex-col px-5">

        <div className="border-2 border-[#ecd85d] flex flex-col max-w-[600px] items-center p-5 gap-5 text-lg bg-[#6b6661]">
          <h1 className="text-xl font-semibold text-center">[Academia - Henry] Bootcamp | Developer FullStack</h1>
          <p className="overflow-hidden text-ellipsis">05/2022 - 01/2023</p>
          <a href="https://www.soyhenry.com/webfullstack" target="_blank" className="hover:opacity-50">
            <img src="https://www.soyhenry.com/_next/static/media/HenryLogo.bb57fd6f.svg" alt="henry_logo" />
          </a>
          <p className="overflow-hidden text-ellipsis text-center">Programa de más de 800 horas de estudio/practica con una metodología de trabajo pair programming y scrum abarcamos tecnologías de Front-End: React, Redux, Axios. Y de Back-End: Node, Sequelize, PostgreSQL.</p>
        </div>

        <div className="border-2 border-[#ecd85d] flex flex-col max-w-[600px] items-center p-5 gap-5 text-lg bg-[#6b6661]">
          <h1 className="text-xl font-semibold text-center">[Academia - Henry] Teaching Assistant</h1>
          <p className="overflow-hidden text-ellipsis">08/2022 - 10/2022</p>
          <a href="https://www.soyhenry.com/" target="_blank" className="hover:opacity-50">
            <img src="https://www.soyhenry.com/_next/static/media/HenryLogo.bb57fd6f.svg" alt="henry_logo2" />
          </a>
          <p className="overflow-hidden text-ellipsis text-center">Coordinar un grupo de estudiantes para lograr
            una correcta integración al grupo de estudio.
            Guiarlos y aconsejarlos en la primera etapa
            del bootcamp.
            Crear un ambiente propicio para el
            aprendizaje y que facilite la confianza entre los
            compañeros.</p>
        </div>
      </div>
    </section >
  )
}