import { useEffect } from "react";
import { useIsTouch } from "./useIsTouch";

export const useCameraDrift = (strength = 6) => {
  const isTouch = useIsTouch();

  useEffect(() => {
    // 🚫 Disable camera drift on touch devices (iOS Safari crash prevention)
    if (isTouch) return;

    let x = 0;
    let y = 0;

    const onMove = (e) => {
      x = (e.clientX / window.innerWidth - 0.5) * strength;
      y = (e.clientY / window.innerHeight - 0.5) * strength;

      document.documentElement.style.setProperty(
        "--camera-x",
        `${x}px`
      );
      document.documentElement.style.setProperty(
        "--camera-y",
        `${y}px`
      );
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.removeProperty("--camera-x");
      document.documentElement.style.removeProperty("--camera-y");
    };
  }, [isTouch, strength]);
};
