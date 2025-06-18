import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ text }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-8 -left-3 -translate-x-1/2 px-2 py-1 bg-white text-black text-xs font-medium rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
      >{text}</motion.div>
    </AnimatePresence>
  );
}
