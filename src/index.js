import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
