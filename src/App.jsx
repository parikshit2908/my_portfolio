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
  return (
    <BrowserRouter>
      <EffectProvider>
        <TimeProvider>
          <CameraWrapper>
            <MultiStarfield />
            <BackgroundObjects />
            <WireframeRings />
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
