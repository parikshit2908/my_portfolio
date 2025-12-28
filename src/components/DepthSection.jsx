import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffects } from "../context/EffectContext";

const DepthSection = ({ children, depth = 0 }) => {
  const ref = useRef(null);
  const { godMode } = useEffects();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const zStrength = godMode ? depth * 1.8 : depth;

  const translateZ = useTransform(
    scrollYProgress,
    [0, 1],
    [-zStrength, zStrength]
  );

  return (
    <motion.section
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform: `translateZ(${translateZ.get()}px)`,
      }}
    >
      {children}
    </motion.section>
  );
};

export default DepthSection;
