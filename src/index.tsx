import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RouterConfig from "./config/RouterConfig";
import "./index.less";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>
);
