import mailJS from '../../assets/Icons/mailJS.webp'
import nodeMailer from '../../assets/Icons/nodemailer.webp'
import chakra from '../../assets/Icons/chakra.webp'
import { useState } from 'react';
import Tooltip from '../Tooltip'

export function Javascript() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)}>
      < img
        alt="javascript"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185231737-1ba31713-13f0-48a3-b352-5c2bef06285c.svg"
      />
      {hoveredTech && <Tooltip text='Javascript' />}
    </div >
  )
}

export function Firebase() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="Firebase"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      />
      {hoveredTech && <Tooltip text='Firebase' />}
    </div>
  )
}

export function Expo() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="Expo"
        width="30px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAALDhMLDxMLDxMLDhQKDhQIEBAMEBALDxILDxMLEBMNEBMKDxMLDxMQEBAKDhILDhMLDxILEBULDxIKDRALDRMMDhMKDxIMEBQLEBIKDxMMEBIKDhQIDBQLEBRBCDrWAAAAH3RSTlMAn+//j38gQM+/YFDf3xCAoO8w31BfkN9AcK+AgEBwIYLNDwAAAMVJREFUeAGt0MsWQzAUheHNIe1BkWpLr+//mLVErE1i1H5Dg33kx58lqUiaYVcukww7jMwOiDvKTBFVyKJETCWLUx39Q9IgYCohaTjRykq290RrxTnHBzpjbPSpF3GuQEm1gicmGN0iE4U/gFHd+zUe4E9DUCunA/THDTXyB5zarmu1wc27n+BGDxB1E4YHDMicK6GBJxhevpYf6MCWGAq8ZTJgY/ATygmYK67gBMzHgG4SbGLodEsRpe7xRc8HmOntB7/7AmhdCQtgyt3wAAAAAElFTkSuQmCC"
      />
      {hoveredTech && <Tooltip text='Expo' />}
    </div>
  )
}

export function ReactNative() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="reactNative"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185236678-4d3a20e6-4ac7-4e61-a2bd-66c98f576ecf.svg"
      />
      {hoveredTech && <Tooltip text='React Native' />}
    </div>
  )
}

export function React() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="react"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185236678-4d3a20e6-4ac7-4e61-a2bd-66c98f576ecf.svg"
      />
      {hoveredTech && <Tooltip text='React' />}
    </div>
  )
}

export function Express() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="express"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      />
      {hoveredTech && <Tooltip text='Express' />}
    </div>
  )
}

export function Nodejs() {
  const [hoveredTech, setHoveredTech] = useState(null);


  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="nodejs"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185236647-b3712d46-4a0b-4cf8-b761-d53ca8c26fe2.svg"
      />
      {hoveredTech && <Tooltip text='Node.js' />}
    </div>
  )
}

export function Redux() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="redux"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237182-d52b1291-83ba-4b5f-a3ef-e0a26277f8ff.svg"
      />
      {hoveredTech && <Tooltip text='Redux' />}
    </div>
  )
}

export function Sequelize() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="sequelize"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237348-35a8cbda-a32b-4a64-a9e0-07e466d0a337.svg"
      />
      {hoveredTech && <Tooltip text='Sequelize' />}
    </div>
  )
}

export function PostgreSQL() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="postgreSQL"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237377-f550d006-af86-44c7-a3ac-5fdeafd61e90.svg"
      />
      {hoveredTech && <Tooltip text='PostgreSQL' />}
    </div>
  )
}

export function Typescript() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="typescript"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237391-95fb91e3-66b7-486f-b0fb-a9786d2e8eb3.svg"
      />
      {hoveredTech && <Tooltip text='Typescript' />}
    </div>
  )
}
export function Git() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="git"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237411-06551dea-cd5f-4dd5-9be4-994eeea573bc.svg"
      />
      {hoveredTech && <Tooltip text='Git' />}
    </div>
  )
}

export function HTML() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="html"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185236790-0faaaeed-e7ca-4d75-80c9-8b6e0aab1fff.svg"
      />
      {hoveredTech && <Tooltip text='HTML' />}
    </div>
  )
}

export function CSS() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="css"
        width="30px"
        src="https://user-images.githubusercontent.com/102181381/185237561-15f189ed-ed0c-4282-a5c8-41e5b07c3f46.svg"
      />
      {hoveredTech && <Tooltip text='CSS' />}
    </div>
  )
}

export function Chartjs() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="chartjs"
        width="40px"
        src="https://www.chartjs.org/media/logo-title.svg"
      />
      {hoveredTech && <Tooltip text='Chartjs' />}
    </div>
  )
}

export function Tailwind() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="tailwind"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      />
      {hoveredTech && <Tooltip text='Tailwind' />}
    </div>
  )
}

export function Nextjs13() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="nextJS13"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      />
      {hoveredTech && <Tooltip text='Next.js' />}
    </div>
  )
}

export function GitHub() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="GitHub"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      />
      {hoveredTech && <Tooltip text='GitHub' />}
    </div>
  )
}

export function MailJS() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="MailJS"
        width="30px"
        src={mailJS}
      />
      {hoveredTech && <Tooltip text='MailJS' />}
    </div>
  )
}

export function NodeMailer() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="NodeMailer"
        width="30px"
        src={nodeMailer}
      />
      {hoveredTech && <Tooltip text='NodeMailer' />}
    </div>
  )
}

export function Trello() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="Trello"
        width="30px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
      />
      {hoveredTech && <Tooltip text='Trello' />}
    </div>
  )
}

export function Chakra() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex justify-center' onMouseEnter={() => setHoveredTech(true)} onMouseLeave={() => setHoveredTech(null)} >
      <img
        alt="Chakra"
        width="30px"
        src={chakra}
      />
      {hoveredTech && <Tooltip text='Chakra' />}
    </div>
  )
}






