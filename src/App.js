import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = ({state, ...props}) => {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <div className={"main"}>
                    <Routes>
                        <Route path={"/profile"}
                               element={<Profile state={state.profilePage}/>}/>
                        <Route path={"/dialogs/*"}
                               element={<Dialogs state={state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
