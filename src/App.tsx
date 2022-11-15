import './App.css';
import React, {lazy} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";
import {RootState} from "./redux/redux-store";

const Navigation = require("./components/Navigation/NavigationContainer").default;
const {LoginContainer} = require("./components/Login/Login");
const {withRouter} = require("./HOC/withRouter");

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

type PropsType = {
    initializeApp: () => any
    initialized: boolean
}

class App extends Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="App">
                    <Navigation/>
                    <div className={"main"}>
                        <Routes>
                            <Route path={"/profile"} element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }/>
                            <Route path={"/profile/:id"} element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }/>

                            <Route path={"/*"} element={
                                <Navigate to={"/profile"}/>
                            }/>

                            <Route path={"/dialogs"} element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }/>
                            <Route path={"/dialogs/:id"} element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }/>

                            <Route path={"/users/*"} element={
                                <React.Suspense fallback={<Preloader/>}>
                                    <UsersContainer/>
                                </React.Suspense>
                            }/>

                            <Route path={"/login/*"} element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            );
        }
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp: initializeAppThunkCreator
    })
)(App)
