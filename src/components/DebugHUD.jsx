import { useEffect, useState } from "react";
import { useEffects } from "../context/EffectContext";
import { useTime } from "../context/TimeContext";

const DebugHUD = () => {
  const { godMode, unlocked } = useEffects();
  const { timeScale } = useTime();

  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frames = 0;
    let last = performance.now();

    const loop = (now) => {
      frames++;
      if (now - last >= 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  if (!unlocked) return null;

  return (
    <div className="debug-hud">
      <div><strong>DEBUG HUD</strong></div>
      <div>FPS: {fps}</div>
      <div>God Mode: {godMode ? "ON" : "OFF"}</div>
      <div>Time Scale: {timeScale.toFixed(2)}</div>
      <div>Camera Drift: ACTIVE</div>
      <div>Star Layers: 3</div>
    </div>
  );
};

export default DebugHUD;
