const SET_USER = "SET_USER";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
                users: state.users.map(user => user.id === action.payload? {...user, followed: true}: user),
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload? {...user, followed: false}: user),
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
                    :state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export let setUSERActionCreator = (users) => ({type: SET_USER, payload: users});
export let followUserActionCreator = (id) => ({type: FOLLOW_USER, payload: id});
export let unfollowUserActionCreator = (id) => ({type: UNFOLLOW_USER, payload: id});
export let setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export let setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount});
export let toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export let toggleFollowingProgressActionCreator = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: {isFetching, userId}});