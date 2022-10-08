import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
