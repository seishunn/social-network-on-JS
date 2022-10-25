import React, {Component} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator, toggleIsFetchingActionCreator} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {useParams} from "react-router-dom";

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
        this.props.toggleIsFetching(true);
        let id = this.props.params.id;
        if (!id) {
            id = 26430;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        if (!this.props.profile) {
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
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator
})(WithRouter(ProfileContainerAPIComponent))