import {usersAPI} from "../API/API";
import {PhotosType} from "../components/Users/Users";
import {AppDispatch, RootState} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const {updateObjectInArray} = require("../utils/object-helpers");

const SET_USER = "users-reducer/SET_USER";
const FOLLOW_USER = "users-reducer/FOLLOW_USER";
const UNFOLLOW_USER = "users-reducer/UNFOLLOW_USER";
const SET_CURRENT_PAGE = "users-reducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users-reducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users-reducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS";

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}

type ActionTypes = SetUsersActionType | FollowUserActionType | UnfollowUserActionType
    | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType;

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 30 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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
type SetUsersActionType = {
    type: typeof SET_USER
    payload: Array<UserType>
};
export let setUsersActionCreator = (users: Array<UserType>): SetUsersActionType => ({type: SET_USER, payload: users});
type FollowUserActionType = {
    type: typeof FOLLOW_USER
    payload: number
};
export let followUserActionCreator = (id: number): FollowUserActionType => ({type: FOLLOW_USER, payload: id});
type UnfollowUserActionType = {
    type: typeof UNFOLLOW_USER
    payload: number
};
export let unfollowUserActionCreator = (id: number): UnfollowUserActionType => ({type: UNFOLLOW_USER, payload: id});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    payload: number
};
export let setCurrentPageActionCreator = (page: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    payload: page
});
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    payload: number
};
export let setTotalUsersCountActionCreator = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount
});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: boolean
};
export let toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    payload: {
        isFetching: boolean
        userId: number
    }
};
export let toggleFollowingProgressActionCreator = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
});

//ThunkCreators
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>;

const followUnfollowFlow = async (dispatch: DispatchType,
                                  userId: number,
                                  apiMethod: Function,
                                  actionCreator: (userId: number) => FollowUserActionType | UnfollowUserActionType) => {
    dispatch(toggleFollowingProgressActionCreator(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgressActionCreator(false, userId));
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUsersCountActionCreator(data.totalCount));
    }
}
export const followUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followUserActionCreator);
    }
}
export const unfollowUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowUserActionCreator);
    }
}