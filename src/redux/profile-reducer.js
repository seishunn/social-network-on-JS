import {profileAPI} from "../API/API";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    posts: [
        {id: 1, message: "Привет, React"},
        {id: 2, message: "Привет, JS"},
        {id: 3, message: "Привет, bundle.js"},
        {id: 4, message: "Привет, props"},
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.payload
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, payload: text});
export let setUserProfileActionCreator = (user) => ({type: SET_USER_PROFILE, payload: user});
export let setUserStatusActionCreator = (status) => ({type: SET_USER_STATUS, payload: status});
export let toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})

export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(toggleIsFetchingActionCreator(false));
                dispatch(setUserProfileActionCreator(data));
            })
    }
}

export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(status => dispatch(setUserStatusActionCreator(status)))
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusActionCreator(status))
                }
            })
    }
}

