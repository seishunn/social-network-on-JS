import './App.css';
import Navigation from "./components/Navigation/NavigationContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App = ({store, ...props}) => {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <div className={"main"}>
                    <Routes>
                        <Route path={"/profile"}
                               element={
                                   <ProfileContainer
                                       state={store.getState().profilePage}
                                       dispatch={props.dispatch}
                                   />}
                        />
                        <Route path={"/profile/:id"}
                               element={
                                   <ProfileContainer
                                       state={store.getState().profilePage}
                                       dispatch={props.dispatch}
                                   />}
                        />
                        <Route path={"/dialogs/*"}
                               element={
                                   <Dialogs
                                       state={store.getState().dialogsPage}
                                       dispatch={props.dispatch}
                                   />}
                        />
                        <Route path={"/users/*"}
                               element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
