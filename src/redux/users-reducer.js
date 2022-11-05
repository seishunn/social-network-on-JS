import {usersAPI} from "../API/API";
import {updateObjectInArray} from "../utils/object-helpers";

const SET_USER = "users-reducer/SET_USER";
const FOLLOW_USER = "users-reducer/FOLLOW_USER";
const UNFOLLOW_USER = "users-reducer/UNFOLLOW_USER";
const SET_CURRENT_PAGE = "users-reducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users-reducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                users: [...action.payload],
            }
        }
        case FOLLOW_USER: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: true}),
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: false}),
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.payload
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default: {
            return state;
        }
    }
}

//ActionCreators
export let setUsersActionCreator = (users) => ({type: SET_USER, payload: users});
export let followUserActionCreator = (id) => ({type: FOLLOW_USER, payload: id});
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW_USER, payload: id});
export let setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export let setTotalUsersCountActionCreator = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount
});
export let toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export let toggleFollowingProgressActionCreator = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
});

//ThunkCreators
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressActionCreator(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgressActionCreator(false, userId));
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUsersCountActionCreator(data.totalCount));
    }
}
export const followUserThunkCreator = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followUserActionCreator);
    }
}
export const unfollowUserThunkCreator = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowUserActionCreator);
    }
}