import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Educacion from '../Educacion/Educacion.jsx'
import ProjectsHighlighted from '../Projects/ProjectsHighlighted.jsx'
import Technologies from '../Technologies/Technologies.jsx'

export default function Home() {
  return (
    <div>
      <Inicio />
      <About />
      <Educacion />
      <Technologies />
      <ProjectsHighlighted />
      <Footer />
    </div>
  )
}