import {connect} from "react-redux";
import {Users} from "./Users";
import {UserType} from "./Users";
import React from "react";
import {compose} from "redux";
const {Preloader} = require("../../common/Preloader/Preloader");
const {
    getCurrentPage, getFetching,
    getFollowingInProgress, getPageSize,
    getTotalUsersCount, getUsers
} = require("../../redux/users-selectors");
const {followUserThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, unfollowUserThunkCreator
} =  require("../../redux/users-reducer");

type PropsType = {
    currentPage: number
    followingInProgress: Array<number>
    pageSize: number
    totalUsersCount: number
    users: Array<UserType>
    isFetching: boolean

    changeCurrentPage: (pageNumber: number) => void
    followUser: (userId: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
    unfollowUser: (userId: number) => void
}

export class UsersClassAPIComponent extends React.Component<PropsType> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return (
            <>
                {this.props.isFetching? <Preloader/> : null}
                <Users
                    pageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.followUser}
                    unfollow={this.props.unfollowUser}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        followUser: followUserThunkCreator,
        unfollowUser: unfollowUserThunkCreator,
        changeCurrentPage: setCurrentPageActionCreator,
        getUsers: getUsersThunkCreator,
    })
)(UsersClassAPIComponent)