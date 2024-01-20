import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.jsx";
import { App1 } from "./components/App/App1.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App1 />
  </React.StrictMode>
);
