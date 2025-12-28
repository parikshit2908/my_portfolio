import { useEffect } from "react";
import { useIsTouch } from "./useIsTouch";

export const useCameraDrift = (strength = 6) => {
  const isTouch = useIsTouch();

  useEffect(() => {
    if (isTouch) return;

    const cam = document.querySelector(".camera");
    if (!cam) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      cam.style.transform = `translate3d(${
        -currentX * strength
      }px, ${-currentY * strength}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, isTouch]);
};
