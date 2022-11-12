import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
const {reducer: formReducer} = require("redux-form");
const {profileReducer} = require("./profile-reducer");
const {dialogsReducer} = require("./dialogs-reducer");
const {usersReducer} = require("./users-reducer");
const {authReducer} = require("./auth-reducer");
const {appReducer} = require("./app-reducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));