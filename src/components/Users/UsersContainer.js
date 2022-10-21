import {connect} from "react-redux";
import {Users} from "./Users";
import {followUserActionCreator, setUSERActionCreator, unfollowUserActionCreator} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)