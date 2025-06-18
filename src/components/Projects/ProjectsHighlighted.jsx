import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projects from "../../data/projects";
import CardProject from "../Card/CardProjectHighlighted/CardProjectHighlighted";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsHighlighted() {
  const [isVisible, setIsVisible] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    setFeaturedProjects(projects.filter(e => e.featured));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "200px 0px"
      }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#253447] w-full py-[4vh] min-[1550px]:px-20 px-4 flex flex-col items-center font-Montserrat"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-[40px] max-[715px]:text-[28px] font-bold text-white text-center"
      >
        PROYECTOS DESTACADOS
      </motion.h1>

      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-20 w-full max-w-7xl mx-auto"
        >
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.2) }}
            >
              <CardProject project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16"
      >
        <Link
          to="/projects"
          className="bg-[#304054] border-2 border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#253447] text-[#ecd85d] px-8 py-3 font-Montserrat font-bold inline-block transition-all duration-300 hover:scale-105 rounded-lg shadow-lg"
        >
          Ver mas proyectos
        </Link>
      </motion.div>
    </section>
  );
}
