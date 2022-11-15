import {applyMiddleware, createStore, compose} from "redux";
import {configureStore, Action} from '@reduxjs/toolkit'
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {combineReducers} from "redux";

const {reducer: formReducer} = require("redux-form");
const {profileReducer} = require("./profile-reducer");
const {dialogsReducer} = require("./dialogs-reducer");
const {usersReducer} = require("./users-reducer");
const {authReducer} = require("./auth-reducer");
const {appReducer} = require("./app-reducer");



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export type RootState = ReturnType<typeof store.getState | any>