import React, {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserThunkCreator} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {Navigate, useParams} from "react-router-dom";

function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams()
        return (
            <Component
                {...props}
                params={params}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainerAPIComponent extends React.Component {

    componentDidMount() {
        let id = this.props.params.id;
        if (!id) {
            id = 26430;
        }
        this.props.getUser(id);
    }

    render() {
        if (!this.props.isAuth) {
            return (
                <Navigate to={'/login'}/>
            )
        }

        if (this.props.isFetching || !this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <Profile {...this.props}/>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    getUser: getUserThunkCreator
})(WithRouter(ProfileContainerAPIComponent))