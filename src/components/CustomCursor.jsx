import { useIsTouch } from "../hooks/useIsTouch";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useEffects } from "../context/EffectContext";

const CustomCursor = () => {
  const isTouch = useIsTouch();
  if (isTouch) return null;
  const { godMode } = useEffects();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mouse.x - 6,
          y: mouse.y - 6,
          scale: godMode ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: godMode ? 700 : 500,
          damping: godMode ? 20 : 30,
        }}
      />

      <motion.div
        className={`cursor-ring ${hover ? "cursor-hover" : ""}`}
        animate={{
          x: mouse.x - 22,
          y: mouse.y - 22,
          scale: godMode ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: godMode ? 220 : 150,
          damping: godMode ? 16 : 20,
        }}
      />
    </>
  );
};

export default CustomCursor;
