import TechIcon from './TechIcon';

export default function Technologies() {
  return (
    <section id="technologies" className="bg-[#0e141b] py-[4vh] w-full min-h-screen flex flex-col items-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-white text-center">MÍS TECNOLOGÍAS</h1>
      <div className="w-full grid  max-[476px]:grid-cols-2 max-[314px]:grid-cols-1 grid-cols-3">
        <div id="front" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>FrontEnd</h1>
            <TechIcon tech="javascript" color="#ecd85d" />
            <TechIcon tech="react" color="#61DAFB" />
            <TechIcon tech="reactnative" color="#61DAFB" />
            <TechIcon tech="redux" color="#764ABC" />
            <TechIcon tech="nextjs" color="#000" />
            <TechIcon tech="html" color="#E33D26" />
            <TechIcon tech="css" color="#1572B6" />
            <TechIcon tech="bootstrap" color="#7611F7" />
            <TechIcon tech="tailwind" color="#38B2Ac" />
          </div>
        </div>
        <div id="back" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>BackEnd</h1>
            <TechIcon tech="nestjs" color="#DF234F" />
            <TechIcon tech="nodejs" color="#83CD29" />
            <TechIcon tech="express" color="#000" />
            <TechIcon tech="typescript" color="#007ACC" />
            <TechIcon tech="sequelize" color="#2379BD" />
            <TechIcon tech="postgresql" color="#336791" />
            <div className="flex flex-col gap-2">
              <TechIcon tech="mongodb" name="Mongo" color="#439934" />
              <TechIcon tech="mongodb" name="Mongoose" color="#439934" />
            </div>
            <TechIcon tech="mysql" color="#00618A" />
          </div>
        </div>
        <div id="others" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>Otras</h1>
            <TechIcon tech="git" color="#F34F29" />
            <TechIcon tech="github" color="#181616" />
            <TechIcon tech="firebase" color="#F58220" />
            <TechIcon tech="chartjs" color="#F3777B" />
            <TechIcon tech="postman" color="#FF6C37" />
            <TechIcon tech="trello" color="#23719F" />
            <TechIcon tech="cloudinary" color="#3448C5" />
            <TechIcon tech="mailjs" color="#FCA353" />
          </div>
        </div>
      </div>
    </section>
  );
}