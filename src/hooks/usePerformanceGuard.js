import { useEffect, useState } from "react";

export const usePerformanceGuard = () => {
  const [lowPerf, setLowPerf] = useState(false);

  useEffect(() => {
    let last = performance.now();
    let frames = 0;

    const check = (now) => {
      frames++;
      if (now - last >= 1000) {
        const fps = frames;
        frames = 0;
        last = now;

        if (fps < 45) setLowPerf(true);
      }
      requestAnimationFrame(check);
    };

    requestAnimationFrame(check);
  }, []);

  return lowPerf;
};
