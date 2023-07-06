import { Javascript, React, CSS, Express, Git, HTML, Nodejs, PostgreSQL, Redux, Sequelize, Typescript, Chartjs, Tailwind, Nextjs13 } from "../components/Projects/IconTechnologies";
import imagesGameInformer from '../assets/GameInformer'
import imagesCoachingEmpleo from '../assets/CoachingEmpleo'
import imagesEasyLeadrning from '../assets/EasyLeadrning'

const projects = [
  {
    title: "-Game Informer-",
    description:
      "Se trata de una Spa (Simple Page Application) desarrollada con React y Redux como state management. Todos los componentes fueron creados con CSS sin uso de librerías externas. La SPA consume datos de una API (RAWG.io) a través de un Back End, que fue desarrollado en Node.JS con Express.La aplicación cuenta con un listado de 705 videojuegos con su información correspondiente detallada (imágenes, géneros, fecha de lanzamiento, etc.). Las funciones que se ofrecen para el usuario son: filtrar, ordenar, crear, eliminar y/o guardar como favorito los videojuegos. ",
    technologies: [<Javascript />, <Express />, <Nodejs />, <React />, <Redux />, <Sequelize />, <PostgreSQL />, <Git />, <HTML />, <CSS />],
    aplication: "https://game-informer.vercel.app/",
    code: "https://github.com/fermin234/Game-Informer",
    images: imagesGameInformer,
    featured: true
  },
  {
    title: "-EasyLearning-",
    description:
      "Es una plataforma e-Learning desarrollada de forma remota entre 7 colaboradores de Argentina. Se implementó scrum como metodología ágil, y Git/GitHub como controlador de versiones. La aplicación brinda una colección de cursos creados por los usuarios.      Esta e-Learning cuenta con: una autentificación con Firebase; un dashboard con el que se puede controlar toda la aplicación como administrador (eliminar usuarios, aprobar/eliminar cursos, ver estadísticas, etc.), y un upload de imágenes, que fue desarrollado con Cloudinary. También ofrece: una pasarela de pagos, un carrito persistente, reviews de la página, de los cursos y de los videos; y la creación y modificación tanto de usuarios como de cursos.",
    technologies: [<Javascript />, <Express />, <Nodejs />, <React />, <Redux />, <Sequelize />, <PostgreSQL />, <Git />, <HTML />, <CSS />],
    aplication: "https://easy-learning-414mpg2kj-fran3003.vercel.app/",
    code: "https://github.com/diazjoaquin/EasyLearning",
    images: imagesEasyLeadrning,
    featured: true
  },
  {
    title: "-Formulario Coaching Empleo Capacitación-",
    description:
      "       Se trata de una Spa (Simple Page Application) desarrollada con React y Redux como state management. Todos los componentes fueron creados con CSS sin uso de librerías externas. La SPA consume datos de una API a través de un Back End, que fue desarrollado en Node.JS con Express. La aplicación cuenta con un listado de 705 videojuegos con su información correspondiente detallada (imágenes, géneros, fecha de lanzamiento, etc.). Las funciones que se ofrecen para el usuario son: filtrar, ordenar, crear, eliminar y/o guardar como favorito los videojuegos.",
    technologies: [<Nextjs13 />, <Javascript />, <React />, <Chartjs />, <Tailwind />, <Git />, <HTML />],
    aplication: "https://formulario-xx6k.vercel.app/",
    code: "https://github.com/GroupFiveDev/Formulario",
    images: imagesCoachingEmpleo,
    featured: true
  },
];

export default projects;
