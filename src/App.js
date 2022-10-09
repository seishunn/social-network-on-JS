import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <div className={"main"}>
                    <Routes>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/dialogs"} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
