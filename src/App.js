import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";

const App = ({store, ...props}) => {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <div className={"main"}>
                    <Routes>
                        <Route path={"/profile"}
                               element={
                                   <Profile
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
