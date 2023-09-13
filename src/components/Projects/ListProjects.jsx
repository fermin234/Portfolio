import CardProyect from "../Card/CardProyect/CardProyect";
import projects from '../../data/projects'
import { useEffect } from "react";

export default function ListProyects() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <section className="bg-color-4 py-[8vh] min-h-screen relative">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3 flex justify-center">PROYECTOS</h1>
      <div className="grid grid-cols-2 max-[1600px]:grid-cols-1 gap-5 px-5">
        {
          projects?.length && projects.map((e, i) => <CardProyect key={i} project={e} />)
        }
      </div>
    </section>
  )
}