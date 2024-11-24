import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for ReactDOM
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
