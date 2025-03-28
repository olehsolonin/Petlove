import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App.jsx";
// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
// 2. Імпортуємо створений раніше стор
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
