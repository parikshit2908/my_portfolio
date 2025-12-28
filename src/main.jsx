import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
  Android Chrome FINAL FIX:
  Do not activate GPU layers until user interacts
*/

const unlock = () => {
  document.documentElement.classList.add("user-unlocked");
  window.removeEventListener("touchstart", unlock);
  window.removeEventListener("scroll", unlock);
};

window.addEventListener("touchstart", unlock, { passive: true });
window.addEventListener("scroll", unlock, { passive: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
