import cloudinary from '../../assets/Icons/cloudinarywebp.webp'
import mailJS from '../../assets/Icons/mailJS.webp'

export default function Technologies() {
  return (
    <section id="technologies" className="bg-color-6 py-[4vh] w-full min-h-screen flex flex-col items-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3 text-center">MÍS TECNOLOGÍAS</h1>
      <div className="w-full grid  max-[476px]:grid-cols-2 max-[314px]:grid-cols-1 grid-cols-3">
        <div id="front" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>FrontEnd</h1>
            <div className="flex justify-start items-center gap-2">
              <img alt="javascript" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185231737-1ba31713-13f0-48a3-b352-5c2bef06285c.svg" />
              <h1><button className="w-[10px] h-[10px] bg-color-2 rounded-full mr-2"></button>Javascript</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="react" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185236678-4d3a20e6-4ac7-4e61-a2bd-66c98f576ecf.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full mr-2"></button>React</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="ReactNative" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185236678-4d3a20e6-4ac7-4e61-a2bd-66c98f576ecf.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#61DAFB] rounded-full mr-2"></button>React Native</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="redux" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237182-d52b1291-83ba-4b5f-a3ef-e0a26277f8ff.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#764ABC] rounded-full mr-2"></button>Redux</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="nextjs" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#000] rounded-full mr-2"></button>NextJS</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="html" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185236790-0faaaeed-e7ca-4d75-80c9-8b6e0aab1fff.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#E33D26] rounded-full mr-2"></button>HTML5</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="css" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237561-15f189ed-ed0c-4282-a5c8-41e5b07c3f46.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#1572B6] rounded-full mr-2"></button>CSS3</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="boostrap" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#7611F7] rounded-full mr-2"></button>Boostrap</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="tailwind" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#38B2Ac] rounded-full mr-2"></button>Tailwind</h1>
            </div>
          </div>
        </div>
        <div id="back" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>BackEnd</h1>
            <div className="flex justify-start items-center gap-2">
              <img alt="NestJS" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#DF234F] rounded-full mr-2"></button>NestJS</h1>
            </div>

            <div className="flex justify-start items-center gap-2">
              <img alt="nodeJs" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185236647-b3712d46-4a0b-4cf8-b761-d53ca8c26fe2.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#83CD29] rounded-full mr-2"></button>NodeJS</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="express" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#000] rounded-full mr-2"></button>Express</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="typescript" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237391-95fb91e3-66b7-486f-b0fb-a9786d2e8eb3.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#007ACC] rounded-full mr-2"></button>Typescript</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="sequelize" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237348-35a8cbda-a32b-4a64-a9e0-07e466d0a337.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#2379BD] rounded-full mr-2"></button>Sequelize</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="postgreSQL" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237377-f550d006-af86-44c7-a3ac-5fdeafd61e90.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#336791] rounded-full mr-2"></button>PostgreSQL</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="Mongo/Mongoose" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <div>
                <h1><button className="w-[10px] h-[10px] bg-[#439934] rounded-full mr-2"></button>Mongo</h1>
                <h1><button className="w-[10px] h-[10px] bg-[#439934] rounded-full mr-2"></button>Mongoose</h1>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="MySQLm" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#00618A] rounded-full mr-2"></button>MySQL</h1>
            </div>


          </div>
        </div>
        <div id="others" className="flex justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className='text-center font-Montserrat text-2xl font-extrabold text-white'>Otras</h1>
            <div className="flex justify-start items-center gap-2">
              <img alt="git" className="max-[750px]:w-[30px] w-[60px]" src="https://user-images.githubusercontent.com/102181381/185237411-06551dea-cd5f-4dd5-9be4-994eeea573bc.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#F34F29] rounded-full mr-2"></button>Git</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="github" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#181616] rounded-full mr-2"></button>GitHub</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="Firebase" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#F58220] rounded-full mr-2"></button>Firebase</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="ChartJS" className="max-[750px]:w-[30px] w-[60px]" src="https://www.chartjs.org/media/logo-title.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#F3777B] rounded-full mr-2"></button>ChartJS</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="Postman" className="max-[750px]:w-[30px] w-[60px]" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#FF6C37] rounded-full mr-2"></button>Postman</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="Trello" className="max-[750px]:w-[30px] w-[60px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
              <h1><button className="w-[10px] h-[10px] bg-[#23719F] rounded-full mr-2"></button>Trello</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="Cloudinary" className="max-[750px]:w-[30px] w-[60px]" src={cloudinary} />
              <h1><button className="w-[10px] h-[10px] bg-[#3448C5] rounded-full mr-2"></button>Cloudinary</h1>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img alt="MailJS" className="max-[750px]:w-[30px] w-[60px]" src={mailJS} />
              <h1><button className="w-[10px] h-[10px] bg-[#FCA353] rounded-full mr-2"></button>MailJS</h1>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}