import './App.css';
import React, {lazy} from "react";
import Navigation from "./components/Navigation/NavigationContainer";
import {Routes, Route} from "react-router-dom";
import {LoginContainer} from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./HOC/withRouter";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
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

let mapStateToProps = (state) => {
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
