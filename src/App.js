import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
                                       addPost={store.addPost.bind(store)}
                                       updateNewPostText={store.updateNewPostText.bind(store)}
                                   />}
                        />
                        <Route path={"/dialogs/*"}
                               element={
                                   <Dialogs
                                       state={store.getState().dialogsPage}
                                       addMessage={store.addMessage.bind(store)}
                                       updateNewMessageText={store.updateNewMessageText.bind(store)}
                                   />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
