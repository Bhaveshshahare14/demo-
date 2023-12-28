import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-rkekb01plx4i2znc.us.auth0.com"
    clientId="UqBb96Tn9wto3B099SX3w5ETUcRPGfSo"
    // authorizationParams={{
    //   redirect_uri: window.location.origin
    // }}
  >
    <App />
    <BrowserRouter/>

  </Auth0Provider>,
);

