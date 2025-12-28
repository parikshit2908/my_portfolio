import { useEffect, useRef } from "react";
import { useEffects } from "../context/EffectContext";
import { useTime } from "../context/TimeContext";
import { usePerformanceGuard } from "../hooks/usePerformanceGuard";

const ParticleUniverse = () => {
  const canvasRef = useRef(null);
  const { godMode } = useEffects();
  const { timeScale } = useTime();
  const lowPerf = usePerformanceGuard();

  useEffect(() => {
    if (lowPerf) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const baseCount = window.innerWidth < 768 ? 30 : 60;
    const count = godMode ? baseCount * 2 : baseCount;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y -= p.speed * (p.z + 0.3) * timeScale;
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.z + 0.6), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.6)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, [godMode, timeScale, lowPerf]);

  if (lowPerf) return null;

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleUniverse;
