import { Link } from "react-router-dom";
import projects from "../../utils/projects";
import CardProjects from "./CardProjects";

export default function ProjectsHighlighted() {
  return (
    <section id="projects" className="bg-color-4 w-full py-[4vh] min-[1550px]:px-40 px-10 flex flex-col items-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3">PROYECTOS DESTACADOS</h1>
      <div className="flex flex-col gap-20">
        {
          projects?.length ? projects.filter(e => e.featured).map((e, i) => <CardProjects key={i} project={e} />) : ""
        }
      </div>
      <Link to="/proyectos" className="mt-10 border-2 border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#181607] text-color-2 w-fit p-2 font-Montserrat font-bold">
        Ver mas proyectos
      </Link>
    </section>
  )
}