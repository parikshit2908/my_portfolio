import { useEffect, useRef } from "react";
import { useTime } from "../context/TimeContext";
import { useEffects } from "../context/EffectContext";

const StarLayer = ({ speedFactor, sizeFactor, opacity }) => {
  const canvasRef = useRef(null);
  const { timeScale } = useTime();
  const { godMode } = useEffects();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const count = godMode ? (window.innerWidth < 768 ? 40 : 120) : (window.innerWidth < 768 ? 25 : 60);

    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * sizeFactor + 0.3,
      v: Math.random() * speedFactor + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        s.y += s.v * timeScale;
        if (s.y > h) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, [timeScale, godMode, speedFactor, sizeFactor, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="star-layer"
      style={{ transform: `translateZ(${-speedFactor * 400}px)` }}
    />
  );
};

const MultiStarfield = () => (
  <>
    <StarLayer speedFactor={0.15} sizeFactor={0.6} opacity={0.25} />
    <StarLayer speedFactor={0.35} sizeFactor={1.2} opacity={0.45} />
    <StarLayer speedFactor={0.7} sizeFactor={2} opacity={0.9} />
  </>
);

export default MultiStarfield;
