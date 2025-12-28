import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
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
function CameraWrapper({ children }) {
  useCameraDrift(6);
  return <div className="camera">{children}</div>;
}

function App() {
  const [ready, setReady] = useState(false);

  // Let browser paint once before heavy layers
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <HashRouter>
      <EffectProvider>
        <TimeProvider>
          <CameraWrapper>
            {ready && (
              <>
                <MultiStarfield />
                <BackgroundObjects />
                <WireframeRings />
              </>
            )}

            <CustomCursor />
            <DebugHUD />
            <Navbar />
            <AppRoutes />
          </CameraWrapper>
        </TimeProvider>
      </EffectProvider>
    </HashRouter>
  );
}

export default App;
