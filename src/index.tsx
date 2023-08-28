import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("goodfind-message-widget") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Find all widget divs
const widgetDivs = document.querySelectorAll(".goodfind-message-widget");

// Inject our React App into each class
widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
