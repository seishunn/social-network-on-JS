import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (props) => {
    root.render(
        <App state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    );
}