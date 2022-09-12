import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'
import "bootswatch/dist/superhero/bootstrap.min.css";
import axios from 'axios';
// import {
//     REACT_APP_AUTH0_DOMAIN,
//     REACT_APP_AUTH0_CLIENT_ID
// } from './config'
axios.defaults.baseURL = process.env.REACT_APP_API || "https://pf-serve.herokuapp.com/api";

createRoot(document.getElementById('root')).render(
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
    </React.StrictMode>
);
