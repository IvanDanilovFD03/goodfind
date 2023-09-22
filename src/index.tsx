import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const widgetDivs = document.querySelectorAll(".goodfind-message-widget");

// Inject our React App into each class
widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div as HTMLElement);
  const divHTML = div as HTMLElement;
  const authorizationToken = divHTML.dataset.authorizationtoken
    ? divHTML.dataset.authorizationtoken
    : "";
  const websiteId = divHTML.dataset.websiteid ? divHTML.dataset.websiteid : "";
  const gtmId = divHTML.dataset.gtmId ? divHTML.dataset.gtmId : ""
  
  root.render(
    <React.StrictMode>
      <App authorizationToken={authorizationToken} websiteId={websiteId} gtmId={gtmId}/>
    </React.StrictMode>
  );
});
