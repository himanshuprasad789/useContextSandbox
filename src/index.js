import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ContextState from "./Context/ContextState";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextState>
      <App />
    </ContextState>
  </StrictMode>
);
