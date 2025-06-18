export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#253447] w-full min-h-screen py-[4vh] flex flex-col justify-center items-center font-Montserrat"
    >
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-white">
        EXPERIENCIA LABORAL
      </h1>
      <div className="flex gap-10 max-[1260px]:flex-col px-5">
        <div className="border-2 border-[#ecd85d] flex flex-col max-w-[600px] items-center p-5 gap-5 text-lg bg-[#304054] rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-center text-white">
            Full Stack Developer
          </h1>
          <h2 className="text-lg font-medium text-center text-[#ecd85d]">
            Bigger
          </h2>
          <p className="overflow-hidden text-ellipsis text-white">
            Abril 2024 - Junio 2025
          </p>
          <a
            href="https://biggertech.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-20 bg-white rounded-lg flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
          >
            <span className="text-black font-bold text-lg">BIGGER</span>
          </a>
          <p className="overflow-hidden text-ellipsis text-center text-white">
            Desarrollé herramientas internas para Bigger iOS y lideré el
            proyecto Ceruno, una plataforma innovadora que utiliza IA para
            generar APIs completas desde prompts. Trabajé en desarrollo full
            stack con enfoque en automatizaciones e integración de inteligencia
            artificial.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              React
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              Node.js
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              NestJS
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              PostgreSQL
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              AWS
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              IA
            </span>
          </div>
        </div>

        <div className="border-2 border-[#ecd85d] flex flex-col max-w-[600px] items-center p-5 gap-5 text-lg bg-[#304054] rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-center text-white">
            Freelancer
          </h1>
          <h2 className="text-lg font-medium text-center text-[#ecd85d]">
            Proyectos Independientes
          </h2>
          <p className="overflow-hidden text-ellipsis text-white">
            2022 - Presente
          </p>
          <a
            href="/projects"
            className="w-full h-20 bg-white rounded-lg flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
          >
            <span className="text-black font-bold text-lg">PORTFOLIO</span>
          </a>
          <p className="overflow-hidden text-ellipsis text-center text-white">
            Desarrollo de sitios web y aplicaciones para clientes diversos.
            Consultoría en tecnologías web modernas. Creación de soluciones
            personalizadas y escalables.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              React
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              Tailwind
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              MongoDB
            </span>
            <span className="px-2 py-1 bg-[#ecd85d] text-black text-sm rounded">
              AWS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
