import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 60,
    rotateX: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    rotateX: -6,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
