import React from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#react-root");
const element = React.createElement("p", {}, "first React Element");
function getReactVersion() {
  return <>React.version;</>;
}

getReactVersion();
createRoot(root).render(element);
