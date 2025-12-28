import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import CustomCursor from "./components/CustomCursor";
import MultiStarfield from "./components/MultiStarfield";
import BackgroundObjects from "./components/BackgroundObjects";
import WireframeRings from "./components/WireframeRings";
import DebugHUD from "./components/DebugHUD";
import { EffectProvider } from "./context/EffectContext";
import { TimeProvider } from "./context/TimeContext";
import { useCameraDrift } from "./hooks/useCameraDrift";
import "./App.css";

/* ===============================
   SAFE CAMERA WRAPPER
================================ */
function CameraWrapper({ children, enable }) {
  // ❗ Only activate drift AFTER mount
  if (enable) {
    useCameraDrift(6);
  }

  return <div className="camera">{children}</div>;
}

function App() {
  const [ready, setReady] = useState(false);
  const [enableDrift, setEnableDrift] = useState(false);

  // Phase 1: allow React to mount & paint
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);

      // Phase 2: enable camera drift AFTER paint
      requestAnimationFrame(() => {
        setEnableDrift(true);
      });
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BrowserRouter>
      <EffectProvider>
        <TimeProvider>
          <CameraWrapper enable={enableDrift}>
            {/* Heavy GPU layers AFTER first paint */}
            {ready && (
              <>
                <MultiStarfield />
                <BackgroundObjects />
                <WireframeRings />
              </>
            )}

            {/* UI (safe) */}
            <CustomCursor />
            <DebugHUD />
            <Navbar />
            <AppRoutes />
          </CameraWrapper>
        </TimeProvider>
      </EffectProvider>
    </BrowserRouter>
  );
}

export default App;
