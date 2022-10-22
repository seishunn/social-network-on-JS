import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUserActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUSERActionCreator,
    unfollowUserActionCreator
} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)