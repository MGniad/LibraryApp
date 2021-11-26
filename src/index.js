import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BookContextProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BookContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BookContextProvider>,
  document.getElementById("root")
);
