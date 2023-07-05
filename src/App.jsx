/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "sanitize.css/sanitize.css";
import AppRoot from "./containers/AppRoot/index";

const container = document.getElementById("app");
const root = createRoot(container);
const render = () => {
  root.render(
    <StrictMode>
      <AppRoot />
    </StrictMode>
  );
};

render();
