import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {state, addPost, updateNewPostText} from "./redux/state";
import {rerenderEntireTree} from "./render";




rerenderEntireTree({state, addPost, updateNewPostText})
