import './App.css';
import Navigation from "./components/Navigation/NavigationContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {LoginContainer} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                                   />}
                        />
                        <Route path={"/profile/:id"}
                               element={
                                   <ProfileContainer
                                       state={store.getState().profilePage}
                                   />}
                        />
                        <Route path={"/dialogs"}
                               element={
                                   <DialogsContainer
                                       state={store.getState().dialogsPage}
                                   />}
                        />
                        <Route path={"/dialogs/:id"}
                               element={
                                   <DialogsContainer
                                       state={store.getState().dialogsPage}
                                   />}
                        />
                        <Route path={"/users/*"}
                               element={<UsersContainer/>}/>
                        <Route path={"/login/*"}
                               element={<LoginContainer/>}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
