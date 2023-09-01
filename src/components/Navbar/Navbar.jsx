import { useEffect } from 'react';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { BsFiletypePdf } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar({ status, setStatus }) {
  const { pathname } = useLocation()
  const history = useHistory()
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

  function handleClick(e) {
    history.push("/");

    setTimeout(() => {
      const element = document.getElementById(e);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", duration: 1000 });
      }
    }, 100);
  }

  function handleClickProyect(e) {
    history.push("/");

    setTimeout(() => {
      const element = document.getElementById(e);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", duration: 1000 });
      }
    }, 100);

    setStatus(!status)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav className={`fixed w-full flex flex-col items-center font-Montserrat z-[100]`}>

      {/* Pc */}
      <div className={`${color ? "bg-[#120f07] h-[4vh]" : "gradient h-[8vh]"} relative max-[620px]:bg-[#120f07] w-full flex items-center transition-all duration-1000`}>
        <div className='absolute left-3 top-0 h-full flex items-center gap-2'>
          {/* cv */}
          <a
            rel="noreferrer"
            target="_blank"
            download="FerminSolaberrietaCV.pdf"
            href="FerminSolaberrietaCV.pdf"
            title="CV_PDF"
            className='w-full h-auto'>
            <BsFiletypePdf color='white' className='hover:cursor-pointer hover:opacity-25' />
          </a>
          {/* linkedin */}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/fermin-solaberrieta/"
            target="_blank"
            className='w-full h-auto'>
            <AiFillLinkedin color='white' className='hover:cursor-pointer hover:opacity-25' />
          </a>
          {/* wsp */}
          <a rel="noreferrer" href="https://wa.me/2473400240?text=Hola%20Fermín, %20estuve%20mirando%20tu%20perfil%20junto%20con%20tus%20proyectos%20y%20me%20interesaría%20ponerme%20en%20contacto%20con%20usted.%20¡Muchas%20gracias!" target="_blank" className='w-full h-auto' >
            <ImWhatsapp color='white' className=' hover:cursor-pointer hover:opacity-25' />
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 max-[760px]:hidden w-full text-white">
          <RouterLink to="/" className={`${pathname !== "/" ? "" : "hidden"} hover:cursor-pointer`}>
            Inicio
          </RouterLink>
          <Link to="about" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClick("about")}>
            Sobre mí
          </Link>
          <Link to="educacion" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClick("educacion")}>
            Educación
          </Link>
          <Link to="technologies" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClick("technologies")}>
            Mís Tecnologías
          </Link>
          {/* <Link to="projects" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClick("projects")}>
            Proyectos
          </Link> */}

          <div className={`hover:cursor-pointer hover:opacity-25 w-fit ${status ? "hover:opacity-100" : "hover:opacity-25"}`} onClick={() => setStatus(!status)}>
            <p className='flex justify-center items-center gap-1'>
              Mis Proyectos
              <IoIosArrowDown />
            </p>
            <div className={`${status ? "absolute" : "hidden"} bg-black flex flex-col mt-2 items-center justify-center text-center gap-2 py-2 w-[132px]`} >
              <Link to="projects" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClickProyect("projects")}>
                Proyectos <br /> Destacados
              </Link>
              <RouterLink to="proyectos" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClickProyect("proyectos")}>
                Todos los <br /> proyectos
              </RouterLink>
            </div>
          </div>



          <Link to="contact" smooth="true" duration={1000} className='hover:cursor-pointer hover:opacity-25' onClick={() => handleClick("contact")}>
            Contacto
          </Link>
        </div>
        <div className="flex justify-end items-center gap-5 min-[761px]:hidden w-full h-[8vh]">
          <div className='h-full flex justify-center items-center px-4' onClick={() => setDrawer(!drawer)}>
            <RxHamburgerMenu className='w-[30px] h-auto' color='white' />
          </div>
        </div>


      </div>

      {/* Cell phone */}
      <div onClick={() => setDrawer(false)} className={`${drawer ? "" : "hidden"} w-full h-screen`}>
        <div className={`flex flex-col items-center gap-2 py-2 bg-black text-white`}>
          <a href="/" className={`${pathname !== "/" ? "" : "hidden"} w-full text-center py-1`}>Inicio</a>
          <Link to="about" smooth="true" duration={1000} className='hover:cursor-pointer w-full text-center py-1' onClick={() => handleClick("about")}>
            Sobre mí
          </Link>
          <Link to="educacion" smooth="true" duration={1000} className='hover:cursor-pointer w-full text-center py-1' onClick={() => handleClick("educacion")}>
            Educación
          </Link>
          <Link to="educacion" smooth="true" duration={1000} className='hover:cursor-pointer w-full text-center py-1' onClick={() => handleClick("technologies")}>
            Mís Tecnologías
          </Link>
          <Link to="projects" smooth="true" duration={1000} className='hover:cursor-pointer w-full text-center py-1' onClick={() => handleClick("technologies")}>
            Proyectos
          </Link>
          <Link to="contact" smooth="true" duration={1000} className='hover:cursor-pointer w-full text-center py-1' onClick={() => handleClick("contact")}>
            Contacto
          </Link>
        </div>
      </div>

    </nav>
  )
}