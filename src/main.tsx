import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "./utility.css";
import HomePage from "./HomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
