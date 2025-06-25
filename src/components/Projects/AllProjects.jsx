import CardProyect from '../Card/CardProyect/CardProyect';
import projects from '../../data/projects';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <section className="bg-[#1a2433] py-[8vh] min-h-screen relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-[40px] max-[715px]:text-[28px] font-bold text-white flex justify-center"
      >
        PROYECTOS
      </motion.h1>
      <div className="grid grid-cols-2 max-[1600px]:grid-cols-1 gap-8 px-5 max-w-7xl mx-auto">
        {projects?.length &&
          projects.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <CardProyect project={e} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
