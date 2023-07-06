import Carousel from "../Carrousel/Carrousel";

export default function CardProjects({ project }) {

  const { title, description, technologies, aplication, code, images } = project;

  return (
    <div className="flex w-full gap-5">
      <div className="w-[40%] flex flex-col justify-start items-start font-Montserrat gap-9 overflow-hidden">
        <h1 className="font-bold text-2xl text-color-2">{title}</h1>
        <p className="text-justify">{description}</p>
        <div className="flex flex-wrap justify-center items-center gap-2 w-full">
          {technologies.map((technology, techIndex) => (
            <div key={techIndex}>{technology}</div>
          ))}
        </div>
        <div className="font-Montserrat pl-4 flex justify-center w-full items-center gap-10">
          <a
            rel="noreferrer"
            target="_blank"
            className="border-2 p-2 border-[#ecd85d] text-color-2 hover:bg-[#ecd85d] hover:text-[#181607]"
            href={aplication}
          >
            Ver aplicación
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="text-color-2 hover:text-[#181607]"
            href={code}
          >
            Ver código
          </a>
        </div>
      </div>
      <div className="w-[60%] flex items-center justify-center">
        <Carousel images={images} />
      </div>
    </div>
  );
}

