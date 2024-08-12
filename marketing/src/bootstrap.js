import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Start process for running app in an isolated devlopment environment
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// Start process for running app through the container
export { mount };
