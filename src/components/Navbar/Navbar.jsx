import { useEffect } from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { BsFiletypePdf } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

export default function Navbar({ status, setStatus }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);
  const [color, setColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const changeNav = () => {
    setDrawer(false);
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const updateActiveSection = () => {
    const sections = [
      "home",
      "about",
      "education",
      "experience",
      "technologies",
      "projects",
      "contact",
    ];
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    if (
      scrollPos + windowHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      setActiveSection("contact");
      return;
    }

    let currentSection = "home";
    let maxVisibleArea = 0;

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const sectionHeight = rect.height;

        let visibleTop = Math.max(0, -sectionTop);
        let visibleBottom = Math.min(sectionHeight, windowHeight - sectionTop);
        let visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (
          sectionTop <= windowHeight * 0.5 &&
          sectionBottom >= windowHeight * 0.5
        ) {
          visibleArea += sectionHeight * 0.3;
        }

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
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

  function handleClickProject(e) {
    history.push("/");

    setTimeout(() => {
      const element = document.getElementById(e);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", duration: 1000 });
      }
    }, 100);

    setStatus(!status);
  }

  const isProjectsActive = () => {
    return activeSection === "projects" || pathname === "/projects";
  };

  const isFeaturedProjectsActive = () => {
    return activeSection === "projects" && pathname === "/";
  };

  const isAllProjectsActive = () => {
    return pathname === "/projects";
  };

  useEffect(() => {
    const handleScroll = () => {
      changeNav();
      if (pathname === "/") {
        updateActiveSection();
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (pathname === "/") {
      updateActiveSection();
    } else {
      setActiveSection("");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full flex flex-col items-center font-Montserrat z-[100]`}
    >
      <div
        className={`${
          color ? "bg-[#120f07] h-[4vh]" : "gradient h-[8vh]"
        } relative max-[620px]:bg-[#120f07] w-full flex items-center transition-all duration-1000`}
      >
        <div className="absolute left-3 top-0 h-full flex items-center gap-2">
          <a
            rel="noreferrer"
            target="_blank"
            download="FerminSolaberrietaCV.pdf"
            href="FerminSolaberrietaCV.pdf"
            title="CV_PDF"
            className="w-full h-auto"
          >
            <BsFiletypePdf
              color="white"
              className="hover:cursor-pointer hover:opacity-25"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/fermin-solaberrieta/"
            target="_blank"
            className="w-full h-auto"
          >
            <AiFillLinkedin
              color="white"
              className="hover:cursor-pointer hover:opacity-25"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://wa.me/2473400240?text=Hola%20Fermín, %20estuve%20mirando%20tu%20perfil%20junto%20con%20tus%20proyectos%20y%20me%20interesaría%20ponerme%20en%20contacto%20con%20usted.%20¡Muchas%20gracias!"
            target="_blank"
            className="w-full h-auto"
          >
            <ImWhatsapp
              color="white"
              className=" hover:cursor-pointer hover:opacity-25"
            />
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 max-[760px]:hidden w-full text-white">
          <RouterLink
            to="/"
            className={`${
              pathname !== "/" ? "" : "hidden"
            } navbar-item hover:cursor-pointer ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            Inicio
          </RouterLink>
          <Link
            to="about"
            smooth="true"
            duration={1000}
            className={`navbar-item hover:cursor-pointer ${
              activeSection === "about" ? "active" : ""
            }`}
            onClick={() => handleClick("about")}
          >
            Sobre mí
          </Link>
          <Link
            to="education"
            smooth="true"
            duration={1000}
            className={`navbar-item hover:cursor-pointer ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => handleClick("education")}
          >
            Educación
          </Link>
          <Link
            to="experience"
            smooth="true"
            duration={1000}
            className={`navbar-item hover:cursor-pointer ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => handleClick("experience")}
          >
            Experiencia
          </Link>
          <Link
            to="technologies"
            smooth="true"
            duration={1000}
            className={`navbar-item hover:cursor-pointer ${
              activeSection === "technologies" ? "active" : ""
            }`}
            onClick={() => handleClick("technologies")}
          >
            Mís Tecnologías
          </Link>
          <div
            className={`navbar-item hover:cursor-pointer w-fit ${
              isProjectsActive() ? "active" : ""
            } ${status ? "hover:opacity-100" : ""}`}
            onClick={() => setStatus(!status)}
            onMouseEnter={() => setStatus(true)}
            onMouseLeave={() => setStatus(false)}
          >
            <p className="flex justify-center items-center gap-1">
              Mis Proyectos
              <IoIosArrowDown />
            </p>
            <div
              className={`${
                status ? "absolute" : "hidden"
              } bg-black flex flex-col top-full items-center justify-center text-center gap-2 py-2 w-[132px]`}
            >
              <Link
                to="projects"
                smooth="true"
                duration={1000}
                className={`hover:cursor-pointer hover:opacity-25 ${
                  isFeaturedProjectsActive() ? "text-yellow-400" : ""
                }`}
                onClick={() => handleClickProject("projects")}
              >
                Proyectos <br /> Destacados
              </Link>
              <RouterLink
                to="projects"
                smooth="true"
                duration={1000}
                className={`hover:cursor-pointer hover:opacity-25 ${
                  isAllProjectsActive() ? "text-yellow-400" : ""
                }`}
                onClick={() => handleClickProject("projects")}
              >
                Todos los <br /> proyectos
              </RouterLink>
            </div>
          </div>
          <Link
            to="contact"
            smooth="true"
            duration={1000}
            className={`navbar-item hover:cursor-pointer ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => handleClick("contact")}
          >
            Contacto
          </Link>
        </div>
        <div className="flex justify-end items-center gap-5 min-[761px]:hidden w-full h-[8vh]">
          <div
            className="h-full flex justify-center items-center px-4"
            onClick={() => setDrawer(!drawer)}
          >
            <RxHamburgerMenu className="w-[30px] h-auto" color="white" />
          </div>
        </div>
      </div>

      <div
        onClick={() => setDrawer(false)}
        className={`${drawer ? "" : "hidden"} w-full h-screen`}
      >
        <div
          className={`flex flex-col items-center gap-2 py-2 bg-black text-white`}
        >
          <a
            href="/"
            className={`${
              pathname !== "/" ? "" : "hidden"
            } w-full text-center py-1`}
          >
            Inicio
          </a>
          <Link
            to="about"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("about")}
          >
            Sobre mí
          </Link>
          <Link
            to="education"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("education")}
          >
            Educación
          </Link>
          <Link
            to="experience"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("experience")}
          >
            Experiencia
          </Link>
          <Link
            to="technologies"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("technologies")}
          >
            Mís Tecnologías
          </Link>
          <Link
            to="projects"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("technologies")}
          >
            Proyectos
          </Link>
          <Link
            to="contact"
            smooth="true"
            duration={1000}
            className="hover:cursor-pointer w-full text-center py-1"
            onClick={() => handleClick("contact")}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
