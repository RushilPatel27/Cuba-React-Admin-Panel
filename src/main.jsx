import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoute from "./AppRoute.jsx";
import Layout from "./component/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </StrictMode>
);
