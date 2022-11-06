import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPageActionCreator,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {dialogsAPI} from "../../API/API";
import {
    getCurrentPage, getFetching,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

// Первая контейнерная компонента, для получения списка пользователей при вмонтировании. (2 уровень)
export class UsersClassAPIComponent extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (page) => {
        this.props.changeCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
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

// Вторая контейнерная компонента, для работы с store. (1 уровень - главная)
let mapStateToProps = (state) => {
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