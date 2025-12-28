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

function CameraWrapper({ children }) {
  useCameraDrift(6);
  return <div className="camera">{children}</div>;
}

function App() {
  const [ready, setReady] = useState(false);

  // Delay heavy GPU layers until after first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
