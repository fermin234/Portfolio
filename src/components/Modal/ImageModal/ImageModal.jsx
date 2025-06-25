import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function ImageModal({ children, isOpen, closeModal }) {
  const handleCloseModal = e => e.stopPropagation();

  const body = document.getElementById('body');
  if (isOpen) {
    body.className = 'overflow-y-hidden';
  } else {
    body.className = '';
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full h-screen flex justify-center items-center top-0 left-0 bg-black/90 z-[100] p-4 md:p-8"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] h-[80vh] md:h-[85vh] flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#ecd85d' }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-[110] bg-[#253447] text-white hover:text-black rounded-full p-2 shadow-lg transition-all"
            >
              <IoClose size={24} />
            </motion.button>

            <div className="w-full h-full overflow-hidden">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}