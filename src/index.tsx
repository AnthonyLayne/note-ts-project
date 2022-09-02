import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/reducers";

import App from "./App";

import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
