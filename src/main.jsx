import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TourContextProvider from "./context/TourContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TourContextProvider>
  </React.StrictMode>
);
