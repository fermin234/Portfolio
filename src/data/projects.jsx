import { Javascript, React, CSS, Express, Git, HTML, Nodejs, PostgreSQL, Redux, Sequelize, Expo, Chartjs, Tailwind, Nextjs13, MailJS, GitHub, NodeMailer, Trello, Chakra, ReactNative, Firebase, Typescript } from '../components/Technologies/IconTechnologies';
import imagesGameInformer from '../assets/GameInformer';
import imagesCoachingEmpleo from '../assets/CoachingEmpleo';
import imagesEasyLeadrning from '../assets/EasyLeadrning';
import imagesInmobiliariaMartinez from '../assets/InmobiliariaMartinez';
import imagesFlashCards from '../assets/FlashCards';
import imagesCalorieCounter from '../assets/CalorieCounter';

const projects = [
  {
    title: '-TJ Inmobiliaria-',
    description:
      <>
        <p>
          TJ Inmobiliaria es una aplicación web desarrollada para una reconocida inmobiliaria de Colón, Buenos Aires.
        </p>

        <p>
          <strong>Características principales:</strong>
        </p>
        <ul>
          <li>Exploración de propiedades mediante filtros por fecha, precio y tipo (departamentos o campos)</li>
          <li>Mapa interactivo que muestra la ubicación exacta de cada propiedad</li>
          <li>Visualización detallada con información clave: habitaciones, baños y descripción completa</li>
          <li>Sección &quot;Nosotros&quot; con la historia y valores de la empresa</li>
        </ul>

        <p>
          <strong>Panel de administración:</strong>
        </p>
        <ul>
          <li>Gestión completa de propiedades</li>
          <li>Carga de imágenes (almacenadas en Cloudinary)</li>
          <li>Modificación del estado de las propiedades (vendida, archivada o eliminada)</li>
          <li>Administración eficiente del catálogo inmobiliario</li>
        </ul>
      </>
    ,
    technologies: [<Javascript key="javascript" />, <Express key="express" />, <Nodejs key="nodejs" />, <Sequelize key="sequelize" />, <PostgreSQL key="postgresql" />, <React key="react" />, <Tailwind key="tailwind" />, <Git key="git" />, <HTML key="html" />, <GitHub key="github" />],
    aplication: 'https://www.martineznessicampos.com/',
    code: 'https://github.com/GroupFiveDev/Martinez-Inmobiliaria-SRL',
    images: imagesInmobiliariaMartinez,
    responsive: 5,
    featured: true
  },
  {
    title: 'Flash Cards',
    description:
      <>
        <p>
          FlashCards es una aplicación móvil desarrollada con React Native y Expo que te permite organizar y estudiar de manera efectiva mediante tarjetas de aprendizaje. Crea tus propias categorías y tarjetas con información valiosa para facilitar tu proceso de aprendizaje
        </p>

        <p>
          <strong>Características Principales:</strong>
        </p>
        <p>
          <strong>• Creación de Cuentas:</strong> Permite a los usuarios crear cuentas personalizadas para gestionar sus tarjetas.
        </p>
        <p>
          <strong>• Gestión de Categorías:</strong> Crea categorías según tus necesidades.
        </p>
        <p>
          <strong>• Tarjetas Personalizadas:</strong> Diseña tarjetas con contenido frontal y posterior para estudiar de manera efectiva.
        </p>
        <p>
          <strong>• Cambio de Contraseña:</strong> Ofrece la funcionalidad de cambiar la contraseña del usuario para una mayor seguridad.
        </p>
      </>
    ,
    technologies: [<React key="react" />, <ReactNative key="reactnative" />, <Expo key="expo" />, <Firebase key="firebase" />, <Git key="git" />, <GitHub key="github" />],
    aplication: 'https://www.youtube.com/watch?v=UaXtypfygAQ&ab_channel=FerminSolaberrieta',
    code: 'https://github.com/fermin234/Flash-Cards',
    images: imagesFlashCards,
    responsive: 5,
    featured: true
  },
  {
    title: 'Game Informer',
    description:
      <>
        <p>
          Aplicación web que ofrece una asombrosa colección de aproximadamente 705 juegos, todos al alcance de un clic.
        </p>

        <p>
          En su página principal, encontrarás una lista clara y concisa de juegos, con hasta 20 juegos por página. Lo destacado de esta plataforma es su funcionalidad de filtrado, que te permite explorar esta extensa colección de juegos de manera intuitiva. Puedes filtrarlos por género, ordenarlos alfabéticamente o aplicar múltiples combinaciones de filtros para obtener resultados precisos y relevantes.
        </p>

        <p>
          Además, Game Informer cuenta con una sección de &quot;Favoritos&quot; que permite a los usuarios guardar sus juegos preferidos para acceder a ellos rápidamente en cualquier momento.
        </p>

        <p>
          Cada juego en la plataforma incluye detalles específicos y una selección cuidadosa de imágenes que proporcionan una visión completa de lo que te espera. Desde la sinopsis del juego hasta capturas de pantalla y arte conceptual, encontrarás toda la información necesaria para tomar decisiones informadas sobre tu próxima aventura virtual.
        </p>
      </>,
    technologies: [<Javascript key="javascript" />, <Express key="express" />, <Nodejs key="nodejs" />, <React key="react" />, <Redux key="redux" />, <Sequelize key="sequelize" />, <PostgreSQL key="postgresql" />, <Git key="git" />, <HTML key="html" />, <CSS key="css" />, <GitHub key="github" />],
    aplication: 'https://game-informer.vercel.app/',
    code: 'https://github.com/fermin234/Game-Informer',
    images: imagesGameInformer,
    responsive: 0,
    featured: true
  },
  {
    title: 'Diagnóstico Inicial de Búsqueda de Empleo',
    description:
      <>
        <p>
          La aplicación web <strong>Diagnóstico Inicial de Búsqueda de Empleo</strong> consta de 7 módulos que guían al usuario a través de un proceso interactivo.
        </p>

        <p>
          <strong>Módulo 1:</strong> Recopilación de información personal del usuario para enviarle resultados por correo electrónico.
        </p>

        <p>
          <strong>Módulo 2:</strong> Evaluación del CV del cliente con recomendaciones sobre estructura y contenido.
        </p>

        <p>
          <strong>Módulo 3:</strong> Simulación de preguntas de entrevista laboral con asesoramiento para mejorar la preparación.
        </p>

        <p>
          <strong>Módulo 4:</strong> Análisis de estrategias de búsqueda de empleo con recomendaciones específicas.
        </p>

        <p>
          <strong>Módulo 5:</strong> Análisis del uso de LinkedIn para la búsqueda de empleo con sugerencias para optimizar el perfil.
        </p>

        <p>
          <strong>Módulo 6:</strong> Exploración de metas profesionales con asesoramiento para planificar la carrera.
        </p>

        <p>
          <strong>Módulo 7:</strong> Estadísticas personalizadas basadas en respuestas anteriores con recomendaciones específicas.
        </p>

        <p>
          Al finalizar, la aplicación envía automáticamente un correo electrónico al usuario con la gráfica de estadísticas, resultados del diagnóstico y recomendaciones específicas según las áreas que necesiten mejorar.
        </p>
      </>
    ,
    technologies: [<Nextjs13 key="nextjs13" />, <Javascript key="javascript" />, <React key="react" />, <Chartjs key="chartjs" />, <Tailwind key="tailwind" />, <MailJS key="mailjs" />, <Git key="git" />, <HTML key="html" />, <Trello key="trello" />, <GitHub key="github" />],
    aplication: 'https://formulario-xx6k.vercel.app/',
    code: 'https://github.com/GroupFiveDev/Formulario',
    images: imagesCoachingEmpleo,
    responsive: 5,
    featured: true
  },
  {
    title: 'Calorie Counter',
    description:
      <>
        <p>
          Aplicación móvil desarrollada con React Native que te permite llevar un seguimiento de las calorías que consumes diariamente.
        </p>

        <p>
          <strong>Características Principales:</strong>
        </p>
        <p>
          <strong>• Seguimiento de Calorías:</strong> Registra y visualiza las calorías consumidas en diferentes días.
        </p>
        <p>
          <strong>• Gestión de Alimentos:</strong> Agrega, edita o elimina alimentos de tu registro calórico.
        </p>
      </>
    ,
    technologies: [<React key="react" />, <ReactNative key="reactnative" />, <Typescript key="typescript" />, <Git key="git" />, <GitHub key="github" />],
    aplication: 'https://github.com/fermin234/CalorieCounter',
    code: 'https://github.com/fermin234/CalorieCounter',
    images: imagesCalorieCounter,
    responsive: 5,
    featured: false
  },
  {
    title: 'EasyLearning',
    description:
      <>
        <p>
          Desarrollo grupal de una API REST en Node.js con metodología SCRUM, junto con otros 6 desarrolladores y un líder técnico, con una duración de 4 semanas.
        </p>

        <p>
          <strong>Características técnicas:</strong>
        </p>
        <p>• Frontend desarrollado con React y Redux</p>
        <p>• Estilos implementados con Chakra.UI</p>
        <p>• Gráficos de estadísticas con Chart.js en el dashboard del admin</p>
        <p>• Backend desarrollado en Node.JS con Express</p>
        <p>• Base de datos en PostgreSQL con Sequelize como ORM</p>
        <p>• Integración de pagos con PayPal</p>

        <p>
          <strong>Funcionalidades principales:</strong>
        </p>
        <p>• Compra y venta de cursos</p>
        <p>• Ver detalles del curso, filtrar y ordenar</p>
        <p>• Crear, editar, eliminar y guardar cursos como favoritos</p>
        <p>• Sistema de login y registro de usuarios</p>
        <p>• Dashboard personalizado para administradores</p>
      </>,
    technologies: [<Javascript key="javascript" />, <Express key="express" />, <Nodejs key="nodejs" />, <React key="react" />, <Redux key="redux" />, <Sequelize key="sequelize" />, <PostgreSQL key="postgresql" />, <NodeMailer key="nodemailer" />, <Chakra key="chakra" />, <Git key="git" />, <HTML key="html" />, <CSS key="css" />, <Trello key="trello" />, <GitHub key="github" />],
    aplication: 'https://easy-learning-414mpg2kj-fran3003.vercel.app/',
    code: 'https://github.com/diazjoaquin/EasyLearning',
    images: imagesEasyLeadrning,
    responsive: 0,
    featured: false
  },
];

export default projects;
