import { Javascript, React, CSS, Express, Git, HTML, Nodejs, PostgreSQL, Redux, Sequelize, Expo, Chartjs, Tailwind, Nextjs13, MailJS, GitHub, NodeMailer, Trello, Chakra, ReactNative, Firebase, Typescript } from "../components/Technologies/IconTechnologies";
import imagesGameInformer from '../assets/GameInformer'
import imagesCoachingEmpleo from '../assets/CoachingEmpleo'
import imagesEasyLeadrning from '../assets/EasyLeadrning'
import imagesInmobiliariaMartinez from '../assets/InmobiliariaMartinez'
import imagesFlashCards from '../assets/FlashCards'
import imagesCalorieCounter from '../assets/CalorieCounter'

const projects = [
  {
    title: "-TJ Inmobiliaria-",
    description:
      <>
        <p>
          Aplicación web para reconocida Inmobiliaria en Colón, Buenos Aires. Explora propiedades, visualízalas en un mapa interactivo y gestiona tu cartera.
        </p>
        <br />

        <p>
          <strong>Exploración de Propiedades:</strong><br />
          La aplicación web permite a los usuarios explorar todas las propiedades en venta de la inmobiliaria. Los usuarios pueden navegar a través de un catálogo completo de propiedades y aplicar diversos filtros para encontrar la propiedad ideal. Estos filtros incluyen la capacidad de buscar propiedades por fecha de listado y rango de precios. Además, los usuarios pueden segmentar las propiedades por tipo, ya sea departamentos o campos, para una búsqueda aún más específica.
        </p>
        <br />

        <p>
          <strong>Visualización en Mapa:</strong><br />
          Una característica destacada de la aplicación es la sección de mapas, que muestra la ubicación precisa de todas las propiedades en un mapa interactivo. Los usuarios pueden ver visualmente la distribución geográfica de las propiedades disponibles y hacer clic en cada marcador para obtener información detallada de la propiedad, lo que facilita la ubicación de propiedades en áreas de interés.
        </p>
        <br />

        <p>
          <strong>Detalles de Propiedad:</strong><br />
          Al hacer clic en una propiedad en el mapa o en la lista de propiedades, los usuarios pueden acceder a un pequeño detalle que proporciona información esencial sobre la propiedad. Esto incluye detalles como el número de habitaciones, baños, área total y descripción. Esta función brinda a los usuarios una vista rápida de las características clave de cada propiedad.
        </p>
        <br />

        <p>
          <strong>Sección "Nosotros":</strong><br />
          La sección "Nosotros" de la aplicación web ofrece una visión completa de la experiencia y trayectoria de la inmobiliaria. Los usuarios pueden obtener información sobre la historia de la empresa, sus valores y su compromiso con la satisfacción del cliente. Esta sección ayuda a establecer la confianza y la credibilidad de la inmobiliaria.
        </p>
        <br />

        <p>
          <strong>Funcionalidad del Administrador:</strong><br />
          Para el equipo de administradores de la inmobiliaria, la aplicación proporciona un conjunto de herramientas poderosas. Los administradores tienen la capacidad de crear nuevas propiedades en la plataforma, incluyendo la carga de imágenes relacionadas que se almacenan de forma segura en Cloudinary. Además, pueden gestionar el estado de las propiedades, marcándolas como vendidas cuando se cierra una venta, archivándolas para futuras referencias o eliminándolas si ya no están disponibles en el mercado.
        </p>
      </>
    ,
    technologies: [, <Javascript />, <Express />, <Nodejs />, <Sequelize />, <PostgreSQL />, <React />, <Tailwind />, <Git />, <HTML />, <GitHub />],
    aplication: "https://www.martineznessicampos.com/",
    code: "https://github.com/GroupFiveDev/Martinez-Inmobiliaria-SRL",
    images: imagesInmobiliariaMartinez,
    responsive: 5,
    featured: true
  },
  {
    title: "-Flash Cards-",
    description:
      <>
        <p>
          FlashCards es una aplicación móvil desarrollada con React Native y Expo que te permite organizar y estudiar de manera efectiva mediante tarjetas de aprendizaje. Crea tus propias categorías y tarjetas con información valiosa para facilitar tu proceso de aprendizaje
        </p>
        <br />

        <p>
          <strong>Características Principales:</strong><br />
          <strong>Creación de Cuentas:</strong> Permite a los usuarios crear cuentas personalizadas para gestionar sus tarjetas.<br /><br />
          <strong>Gestión de Categorías:</strong> Crea categorías según tus necesidades.<br /><br />
          <strong>Tarjetas Personalizadas:</strong> Diseña tarjetas con contenido frontal y posterior para estudiar de manera efectiva.<br /><br />
          <strong>Cambio de Contraseña:</strong> Ofrece la funcionalidad de cambiar la contraseña del usuario para una mayor seguridad.<br /><br />
        </p>
        <br />
      </>
    ,
    technologies: [<React />, <ReactNative />, <Expo />, <Firebase />, <Git />, <GitHub />],
    aplication: "https://www.youtube.com/watch?v=UaXtypfygAQ&ab_channel=FerminSolaberrieta",
    code: "https://github.com/fermin234/Flash-Cards",
    images: imagesFlashCards,
    responsive: 5,
    featured: true
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
  {
    title: "-Calorie Counter-",
    description:
      <>
        <p>
          Aplicación móvil desarrollada con React Native que te permite llevar un seguimiento de las calorías que consumes diariamente.
        </p>
        <br />

        <p>
          <strong>Características Principales:</strong><br />
          <strong>Seguimiento de Calorías:</strong>  Registra y visualiza las calorías consumidas en diferentes días.<br /><br />
          <strong>Gestión de Alimentos:</strong> Agrega, edita o elimina alimentos de tu registro calórico.<br /><br />
        </p>
        <br />
      </>
    ,
    technologies: [<React />, <ReactNative />, <Typescript />, <Git />, <GitHub />],
    aplication: "https://github.com/fermin234/CalorieCounter",
    code: "https://github.com/fermin234/CalorieCounter",
    images: imagesCalorieCounter,
    responsive: 5,
    featured: false
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
];

export default projects;
