import { useEffect } from 'react';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {
  const { pathname } = useLocation()
  const [drawer, setDrawer] = useState(false)
  const [color, setColor] = useState(false)

  const changeNav = () => {
    setDrawer(false)
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav className={`fixed w-full flex flex-col items-center font-Montserrat z-[100]`}>

      {/* Pc */}
      <div className={`${color ? "bg-[#120f07] h-[4vh]" : "gradient h-[8vh]"} max-[620px]:bg-[#120f07] w-full flex items-center transition-all duration-1000`}>
        <div className="flex justify-center items-center gap-5 max-[620px]:hidden w-full text-white">
          <a href="/" className={`${pathname !== "/" ? "" : "hidden"}`}>Inicio</a>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer'>
            Sobre mí
          </Link>
          <Link to="educacion" smooth={true} duration={500} className='hover:cursor-pointer'>
            Educación
          </Link>
          <Link to="technologies" smooth={true} duration={500} className='hover:cursor-pointer'>
            Mís Tecnologías
          </Link>
          <Link to="projects" smooth={true} duration={500} className='hover:cursor-pointer'>
            Proyectos
          </Link>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer'>
            Contacto
          </Link>
        </div>
        <div className="flex justify-end items-center gap-5 min-[620px]:hidden w-full h-[8vh]">
          <div className='h-full flex justify-center items-center px-4' onClick={() => setDrawer(!drawer)}>
            <RxHamburgerMenu className='w-[30px] h-auto' color='white' />
          </div>
        </div>
      </div>

      {/* Cell phone */}
      <div onClick={() => setDrawer(false)} className={`${drawer ? "" : "hidden"} w-full h-screen`}>
        <div className={`bg-[#f3eae8] flex flex-col items-center gap-2 py-2`}>
          <a href="/" className={`${pathname !== "/" ? "" : "hidden"} bg-blue-100 w-full text-center py-1`}>Inicio</a>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer bg-blue-100 w-full text-center py-1'>
            Sobre mí
          </Link>
          <Link to="technologies" smooth={true} duration={500} className='hover:cursor-pointer bg-blue-100 w-full text-center py-1'>
            Mís Tecnologías
          </Link>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer bg-blue-100 w-full text-center py-1'>
            Proyectos
          </Link>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer bg-blue-100 w-full text-center py-1'>
            Experiencia Laboral
          </Link>
          <Link to="about" smooth={true} duration={500} className='hover:cursor-pointer bg-blue-100 w-full text-center py-1'>
            Contacto
          </Link>
        </div>
      </div>

    </nav>

  )
}