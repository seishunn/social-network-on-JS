import './App.css';
import Navigation from "./components/Navigation/NavigationContainer";
import {Routes, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {LoginContainer} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./HOC/withRouter";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";

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
                            <Route path={"/profile"} element={<ProfileContainer/>}/>
                            <Route path={"/profile/:id"} element={<ProfileContainer/>}/>

                            <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                            <Route path={"/dialogs/:id"} element={<DialogsContainer/>}/>

                            <Route path={"/users/*"} element={<UsersContainer/>}/>

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
