import React, {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";



class ProfileContainerAPIComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.params.id;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUser(userId);
        this.props.getUserStatus(userId);
    }

    render() {
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
        status: state.profilePage.status,
        id: state.auth.id
    }
}

export const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            getUser: getUserThunkCreator,
            getUserStatus: getUserStatusThunkCreator,
            updateUserStatus: updateUserStatusThunkCreator
        }),
    withAuthRedirect,
    withRouter
)(ProfileContainerAPIComponent)