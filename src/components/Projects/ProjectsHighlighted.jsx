import { Link } from "react-router-dom";
import projects from "../../utils/projects";
import CardProjects from "./CardProjects";

export default function ProjectsHighlighted() {
  return (
    <section id="projects" className="bg-color-4 w-full py-[4vh] px-40 flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold text-color-3">PROYECTOS DESTACADOS</h1>
      <div className="flex flex-col gap-20">
        {
          projects?.length ? projects.filter(e => e.featured).map((e, i) => <CardProjects key={i} project={e} />) : ""
        }
      </div>
      <Link to="/proyectos" className="mt-10 border-2 border-[#ecd85d] text-color-2 w-fit p-2 font-Montserrat"> Ver mas proyectos</Link>
    </section>
  )
}