import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Context
import { NotesContextProviderComponent } from "./context/notesContext";

// Components
import App from "src/App";

import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <NotesContextProviderComponent>
      <App />
    </NotesContextProviderComponent>
  </StrictMode>
);
