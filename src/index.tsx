import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//-----> router <-------------------------------------------//
import { BrowserRouter } from "react-router-dom";
//-----> translation <--------------------------------------//
import "./i18n";
//-----> styles <-------------------------------------------//
import "./styles/index.scss";
//- END OF IMPORTS -----------------------------------------//

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
