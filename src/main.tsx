import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import "./ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
