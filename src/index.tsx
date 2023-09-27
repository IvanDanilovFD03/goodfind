import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const widgetDivs = document.querySelectorAll(".goodfind-message-widget");

widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div as HTMLElement);
  const divHTML = div as HTMLElement;
  const authorizationToken = divHTML.dataset.authorizationtoken
    ? divHTML.dataset.authorizationtoken
    : "";
  const websiteId = divHTML.dataset.websiteid ? divHTML.dataset.websiteid : "";
  const gtmId = divHTML.dataset.gtmid ? divHTML.dataset.gtmid : "";

  root.render(
    <>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "${gtmId}");
        `}
        </script>
      </Helmet>
      <App
        authorizationToken={authorizationToken}
        websiteId={websiteId}
        gtmId={gtmId}
      />
    </>
  );
});
