import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUserActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUSERActionCreator, toggleIsFetchingActionCreator,
    unfollowUserActionCreator
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Preloader} from "../../common/Preloader/Preloader";

// Первая контейнерная компонента, для получения списка пользователей при вмонтировании. (2 уровень)
export class UsersClassAPIComponent extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
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
                />
            </>
        )
    }
}

// Вторая контейнерная компонента, для работы с store. (1 уровень - главная)
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followUserActionCreator(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowUserActionCreator(id));
        },
        setUsers: (users) => {
            dispatch(setUSERActionCreator(users))
        },
        changeCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUser: followUserActionCreator,
    unfollowUser: unfollowUserActionCreator,
    setUsers: setUSERActionCreator,
    changeCurrentPage: setCurrentPageActionCreator,
    setTotalUsersCount: setTotalUsersCountActionCreator,
    toggleIsFetching: toggleIsFetchingActionCreator
})(UsersClassAPIComponent)