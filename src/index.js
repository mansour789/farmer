import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlantProvidor } from "./Context";

ReactDOM.render(
  <PlantProvidor>
    <App />
  </PlantProvidor>,
  document.getElementById("root")
);
