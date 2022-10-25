import {Navigation} from "./Navigation";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {setUserDataActionCreator} from "../../redux/auth-reducer";

class NavigationContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }
            })
    }

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
    setUserData: setUserDataActionCreator
})(NavigationContainer)