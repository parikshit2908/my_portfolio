import { motion } from "framer-motion";

const Ring = ({ size, x, y, z, rotate, delay }) => {
  return (
    <motion.div
      className="wire-ring"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.45,
        rotateZ: [rotate, rotate + 360],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: `translateZ(${z}px)`,
      }}
    />
  );
};

const WireframeRings = () => {
  return (
    <div className="wireframe-layer">
      <Ring size={260} x="18%" y="28%" z={-600} rotate={0} delay={0} />
      <Ring size={180} x="68%" y="22%" z={-800} rotate={45} delay={1} />
      <Ring size={340} x="42%" y="76%" z={-1000} rotate={90} delay={2} />
      <Ring size={140} x="82%" y="62%" z={-700} rotate={120} delay={0.5} />
    </div>
  );
};

export default WireframeRings;
