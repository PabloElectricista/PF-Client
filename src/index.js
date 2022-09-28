import React from "react";
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API || "https://pf-serve.herokuapp.com/api";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <App />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
