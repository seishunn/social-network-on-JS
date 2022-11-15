import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

const App = require('./App').default;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HashRouter>
        <Provider store={store}>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </Provider>
    </HashRouter>
);
