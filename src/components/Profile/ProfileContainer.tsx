import React, {Component} from "react";
import {connect} from "react-redux";
import {
    getUserThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    updateProfileImageThunkCreator
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {RootState} from "../../redux/redux-store";
const {Profile} = require("./Profile");
const {withAuthRedirect} = require("../../HOC/withAuthRedirect");
const {withRouter} = require("../../HOC/withRouter");

type MapStateToProps = {
    profile: any
    isFetching: boolean
    status: string
    id: number
};

type MapDispatchToProps = {
    getUser: (userId: number) => any
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    updateProfileImage: (photos: any) => void
}

type OnwPropsType = {
    params: {
        id: number
    }
}

type PropsType = MapStateToProps & MapDispatchToProps & OnwPropsType

class ProfileContainerAPIComponent extends React.Component<PropsType> {

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

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
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

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        id: state.auth.id
    }
}

export default compose<any>(
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