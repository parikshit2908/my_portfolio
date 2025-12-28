import { motion } from "framer-motion";
import { useState } from "react";
import { useEffects } from "../context/EffectContext";

const Motion3D = ({ children }) => {
  const { godMode } = useEffects();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientY - rect.top - rect.height / 2;
    const y = e.clientX - rect.left - rect.width / 2;

    const strength = godMode ? 18 : 30;

    setRotate({
      x: -(x / strength),
      y: y / strength,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{
        type: "spring",
        stiffness: godMode ? 180 : 120,
        damping: godMode ? 12 : 15,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export default Motion3D;
