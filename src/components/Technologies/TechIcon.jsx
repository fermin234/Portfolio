import javascriptIcon from '../../assets/Icons/technologies/javascript.svg';
import reactIcon from '../../assets/Icons/technologies/react.svg';
import reduxIcon from '../../assets/Icons/technologies/redux.svg';
import nextjsIcon from '../../assets/Icons/technologies/nextjs.svg';
import htmlIcon from '../../assets/Icons/technologies/html.svg';
import cssIcon from '../../assets/Icons/technologies/css.svg';
import bootstrapIcon from '../../assets/Icons/technologies/bootstrap.svg';
import tailwindIcon from '../../assets/Icons/technologies/tailwind.svg';
import nestjsIcon from '../../assets/Icons/technologies/nestjs.svg';
import nodejsIcon from '../../assets/Icons/technologies/nodejs.svg';
import expressIcon from '../../assets/Icons/technologies/express.svg';
import typescriptIcon from '../../assets/Icons/technologies/typescript.svg';
import sequelizeIcon from '../../assets/Icons/technologies/sequelize.svg';
import postgresqlIcon from '../../assets/Icons/technologies/postgresql.svg';
import mongodbIcon from '../../assets/Icons/technologies/mongodb.svg';
import mysqlIcon from '../../assets/Icons/technologies/mysql.svg';
import gitIcon from '../../assets/Icons/technologies/git.svg';
import githubIcon from '../../assets/Icons/technologies/github.svg';
import firebaseIcon from '../../assets/Icons/technologies/firebase.svg';
import postmanIcon from '../../assets/Icons/technologies/postman.svg';
import trelloIcon from '../../assets/Icons/technologies/trello.svg';
import chartjsIcon from '../../assets/Icons/technologies/chartjs.svg';
import cloudinaryIcon from '../../assets/Icons/technologies/cloudinary.webp';
import mailjsIcon from '../../assets/Icons/technologies/mailjs.webp';

const techIcons = {
  javascript: javascriptIcon,
  react: reactIcon,
  reactnative: reactIcon,
  redux: reduxIcon,
  nextjs: nextjsIcon,
  html: htmlIcon,
  css: cssIcon,
  bootstrap: bootstrapIcon,
  tailwind: tailwindIcon,
  nestjs: nestjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  typescript: typescriptIcon,
  sequelize: sequelizeIcon,
  postgresql: postgresqlIcon,
  mongodb: mongodbIcon,
  mysql: mysqlIcon,
  git: gitIcon,
  github: githubIcon,
  firebase: firebaseIcon,
  postman: postmanIcon,
  trello: trelloIcon,
  chartjs: chartjsIcon,
  cloudinary: cloudinaryIcon,
  mailjs: mailjsIcon
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const TechIcon = ({ 
  tech, 
  alt = tech, 
  name = tech === 'reactnative' ? 'React Native' : capitalize(tech),
  color, 
  className = "max-[750px]:w-[30px] w-[60px]" 
}) => {
  const iconSrc = techIcons[tech.toLowerCase()];
  
  if (!iconSrc) {
    return (
      <div className="flex justify-start items-center gap-2">
        <div 
          className={`${className} bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold`}
          title={alt}
        >
          {tech.slice(0, 2).toUpperCase()}
        </div>
        <h1 className="flex items-center">
          <div style={{ backgroundColor: color }} className="w-[10px] h-[10px] rounded-full mr-2"></div>
          {name}
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-start items-center gap-2">
      <img
        alt={alt}
        className={className}
        src={iconSrc}
        title={alt}
      />
      <h1 className="flex items-center">
        <div style={{ backgroundColor: color }} className="w-[10px] h-[10px] rounded-full mr-2"></div>
        {name}
      </h1>
    </div>
  );
};

export default TechIcon; 