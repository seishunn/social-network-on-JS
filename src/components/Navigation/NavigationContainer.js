import {Navigation} from "./Navigation";
import {connect} from "react-redux";
import React from "react";
import {logoutThunkCreator} from "../../redux/auth-reducer";

class NavigationContainer extends React.Component {
    render () {
        return (
            <Navigation {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        photo: state.profilePage.profile?.photos,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {
    logout: logoutThunkCreator,
})(NavigationContainer)