import React, {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    updateProfileImageThunkCreator
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";



class ProfileContainerAPIComponent extends React.Component {

    refreshProfile () {
        let userId = this.props.params.id;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUser(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.id !== this.props.params.id) {
            this.refreshProfile();
        }
    }

    render() {
        if (this.props.isFetching || !this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <Profile {...this.props} owner={!!this.props.params.id}/>
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

export default compose(
    connect(mapStateToProps,
        {
            getUser: getUserThunkCreator,
            getUserStatus: getUserStatusThunkCreator,
            updateUserStatus: updateUserStatusThunkCreator,
            updateProfileImage: updateProfileImageThunkCreator
        }),
    withAuthRedirect,
    withRouter
)(ProfileContainerAPIComponent)