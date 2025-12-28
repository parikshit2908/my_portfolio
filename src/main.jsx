import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
  Android Chrome render safety:
  Delay heavy GPU layers until first paint
*/
requestAnimationFrame(() => {
  document.documentElement.classList.add("app-ready");
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
