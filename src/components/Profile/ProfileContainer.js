import React, {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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
        let userId = this.props.params.id;
        if (!userId) {
            userId = 26430;
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
    WithRouter
)(ProfileContainerAPIComponent)