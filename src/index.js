import React from "react";
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
// import {
//     REACT_APP_AUTH0_DOMAIN,
//     REACT_APP_AUTH0_CLIENT_ID
// } from './config'
axios.defaults.baseURL =
  process.env.REACT_APP_API || "http://localhost:4000/api";
  // process.env.REACT_APP_API || "https://pf-serve.herokuapp.com/api";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
