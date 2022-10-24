import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator, toggleIsFetchingActionCreator} from "../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

class ProfileContainerAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/24375`)
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

    // render() {
    //     return (
    //         <>
    //             {/*{this.props.isFetching && <Preloader/>}*/}
    //             <Profile {...this.props}/>
    //         </>
    //     )
    // }
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
})(ProfileContainerAPIComponent)