import { Javascript, React, CSS, Express, Git, HTML, Nodejs, PostgreSQL, Redux, Sequelize, Typescript, Chartjs, Tailwind, Nextjs13, MailJS, GitHub, NodeMailer, Trello, Chakra } from "../components/Technologies/IconTechnologies";
import imagesGameInformer from '../assets/GameInformer'
import imagesCoachingEmpleo from '../assets/CoachingEmpleo'
import imagesEasyLeadrning from '../assets/EasyLeadrning'

const projects = [
  {
    title: "-TJ Inmobiliaria-",
    description:
      "Se trata de una Spa (Simple Page Application) desarrollada con React y Redux como state management. Todos los componentes fueron creados con CSS sin uso de librerías externas. La SPA consume datos de una API a través de un Back End, que fue desarrollado en Node.JS con Express. La aplicación cuenta con un listado de 705 videojuegos con su información correspondiente detallada (imágenes, géneros, fecha de lanzamiento, etc.). Las funciones que se ofrecen para el usuario son: filtrar, ordenar, crear, eliminar y/o guardar como favorito los videojuegos.",
    technologies: [<Nextjs13 />, <Javascript />, <React />, <Chartjs />, <Tailwind />, <MailJS />, <Git />, <HTML />, <Trello />, <GitHub />],
    aplication: "https://formulario-xx6k.vercel.app/",
    code: "https://github.com/GroupFiveDev/Formulario",
    images: imagesCoachingEmpleo,
    responsive: 5,
    featured: true
  },
  {
    title: "-EasyLearning-",
    description:
      "Desarrollo grupal de una API REST en Node.js con metodología SCRUM, junto con otros 6 desarrolladores y un líder técnico, con una duración de 4 semanas. Se trata de una página web desarrollada con React y Redux. Utilizando librerías de estilos como Chakra.UI y Chart.js para gráficos de estadísticas (en el dashboard del admin). La página tiene un Back End, que fue desarrollado en Node.JS con Express y una base de datos en postgreSQL (Sequelize como ORM). La aplicación te da la posibilidad de comprar y vender cursos. Las funciones que se ofrecen para el usuario son: ver detalles del curso, filtrar, ordenar, crear, editar eliminar y/o guardar como favorito los cursos. También cuenta con la función de loguearse y crearse una cuenta. Las transacciones se realizan por medio de paypal y el administrador de la página cuenta con un dashboard personalizado.",
    technologies: [<Javascript />, <Express />, <Nodejs />, <React />, <Redux />, <Sequelize />, <PostgreSQL />, <NodeMailer />, <Chakra />, <Git />, <HTML />, <CSS />, <Trello />, <GitHub />],
    aplication: "https://easy-learning-414mpg2kj-fran3003.vercel.app/",
    code: "https://github.com/diazjoaquin/EasyLearning",
    images: imagesEasyLeadrning,
    responsive: 0,
    featured: false
  },
  {
    title: "-Game Informer-",
    description:
      <>
        <p>
          Aplicación web que ofrece una asombrosa colección de aproximadamente 705 juegos, todos al alcance de un clic.
        </p>
        <br />
        <p>
          En su página principal, encontrarás una lista clara y concisa de juegos, con hasta 20 juegos por página. Lo destacado de esta plataforma es su funcionalidad de filtrado, que te permite explorar esta extensa colección de juegos de manera intuitiva. Puedes filtrarlos por género, ordenarlos alfabéticamente o aplicar múltiples combinaciones de filtros para obtener resultados precisos y relevantes.
        </p>
        <br />
        <p>
          Además, Game Informer cuenta con una sección de "Favoritos" que permite a los usuarios guardar sus juegos preferidos para acceder a ellos rápidamente en cualquier momento.
        </p>
        <br />
        <p>
          Cada juego en la plataforma incluye detalles específicos y una selección cuidadosa de imágenes que proporcionan una visión completa de lo que te espera. Desde la sinopsis del juego hasta capturas de pantalla y arte conceptual, encontrarás toda la información necesaria para tomar decisiones informadas sobre tu próxima aventura virtual.
        </p>
      </>,
    technologies: [<Javascript />, <Express />, <Nodejs />, <React />, <Redux />, <Sequelize />, <PostgreSQL />, <Git />, <HTML />, <CSS />, <GitHub />],
    aplication: "https://game-informer.vercel.app/",
    code: "https://github.com/fermin234/Game-Informer",
    images: imagesGameInformer,
    responsive: 0,
    featured: true
  },
  {
    title: "-Diagnóstico Inicial de Búsqueda de Empleo-",
    description:
      <>
        <p>
          La aplicación web <strong>Diagnóstico Inicial de Búsqueda de Empleo</strong> consta de 7 módulos que guían al usuario a través de un proceso interactivo. En el primer módulo, el usuario proporciona su información personal, como nombre, dirección de correo electrónico y datos de contacto, para poder enviarle la información por correo electrónico al finalizar el diagnóstico.
        </p>
        <br />
        <p>
          En el segundo módulo, se evalúa el C.V.del cliente y se ofrecen recomendaciones sobre su estructura y contenido.
        </p>
        <br />
        <p>
          El tercer módulo simula preguntas de una entrevista laboral y brinda asesoramiento para mejorar su preparación.
        </p>
        <br />
        <p>
          El cuarto módulo se enfoca en las estrategias de búsqueda de empleo del usuario y, si es necesario, se le proporcionan recomendaciones específicas.
        </p>
        <br />
        <p>
          En el quinto módulo, se analiza el uso de LinkedIn para la búsqueda de empleo y se ofrecen sugerencias para optimizar su perfil.
        </p>
        <br />
        <p>
          El sexto módulo explora las metas profesionales del usuario y brinda asesoramiento para planificar su carrera.Finalmente.
        </p>
        <br />
        <p>
          El séptimo módulo muestra estadísticas personalizadas basadas en las respuestas anteriores y entrega recomendaciones específicas para mejorar sus oportunidades laborales.
        </p>
        <br />
        <p>
          Al finalizar el módulo de Estadísticas Personalizadas y Asesoramiento, la aplicación enviará automáticamente un correo electrónico al usuario en la dirección proporcionada en el primer módulo.El correo electrónico contendrá la gráfica con las estadísticas y resultados del diagnóstico, así como las recomendaciones y asesoramiento específico según las áreas que necesiten mejorar.
        </p>
      </>
    ,
    technologies: [<Nextjs13 />, <Javascript />, <React />, <Chartjs />, <Tailwind />, <MailJS />, <Git />, <HTML />, <Trello />, <GitHub />],
    aplication: "https://formulario-xx6k.vercel.app/",
    code: "https://github.com/GroupFiveDev/Formulario",
    images: imagesCoachingEmpleo,
    responsive: 5,
    featured: true
  },

];

export default projects;
