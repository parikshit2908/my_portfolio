import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const FloatingOrb = ({ size, x, y, z, delay }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tx = useTransform(mx, [-0.5, 0.5], [-30, 30]);
  const ty = useTransform(my, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) - 0.5);
      my.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="bg-orb"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.35,
        y: [y - 20, y + 20, y - 20],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: `translateZ(${z}px)`,
        x: tx,
        y: ty,
      }}
    />
  );
};

const BackgroundObjects = () => {
  return (
    <div className="bg-objects">
      <FloatingOrb size={220} x="12%" y="18%" z={-300} delay={0} />
      <FloatingOrb size={160} x="70%" y="26%" z={-500} delay={2} />
      <FloatingOrb size={300} x="40%" y="72%" z={-700} delay={4} />
      <FloatingOrb size={140} x="82%" y="64%" z={-400} delay={1} />
    </div>
  );
};

export default BackgroundObjects;
