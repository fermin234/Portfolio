import { Link } from 'react-scroll';

export default function Inicio() {
  // bg-[#e8e5e5] 
  return (
    <section className="bg-color-4 h-screen font-Montserrat flex flex-col justify-center items-center md:items-start px-10 md:pl-[20%] text-center md:text-left gap-10">
      <h1 className="font-extrabold text-4xl color-[#272341]">Hola, mi nombre es <span className="text-color-2">Solaberrieta, Fermín</span> <br />Y soy FullStack Developer.</h1>
      <Link to="about" smooth={true} duration={500} className="border-[#ecd85d] border-2 px-2 font-Montserrat text-2xl text-color-2 hover:cursor-pointer">
        Sobre mí
      </Link>
    </section >
  )
}