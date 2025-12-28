import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useEffects } from "./EffectContext";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const { godMode } = useEffects();
  const lastScroll = useRef(window.scrollY);
  const lastTime = useRef(performance.now());
  const [timeScale, setTimeScale] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastScroll.current);
      const dt = now - lastTime.current;

      const speed = dt > 0 ? dy / dt : 0; // scroll speed
      const max = godMode ? 3 : 1.6;
      const scale = Math.min(max, Math.max(0.6, 1 + speed * 0.02));

      setTimeScale(scale);
      lastScroll.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [godMode]);

  return (
    <TimeContext.Provider value={{ timeScale }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
