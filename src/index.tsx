import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const widgetDivs = document.querySelectorAll(".goodfind-message-widget");

declare global {
  interface Window {
    _paq: any[];
  }
}

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
        <script>
          {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://dev-goodfind.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='//cdn.matomo.cloud/dev-goodfind.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
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
